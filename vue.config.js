'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = defaultSettings.title

const port = process.env.port || process.env.npm_config_port || 8080

module.exports = {
    publicPath: './',
    outputDir: "dist",
    lintOnSave: false,
    devServer: {
        host: "192.168.51.26",
        port: port,
        open: true,
        overlay: { //192.168.50.142:8080
            warnings: false,
            errors: true
        },
        disableHostCheck: true,
        // proxy: {
        //     "/ticket": {
        //         target: "http://192.168.51.35:8085", //wl
        //         changeOrigin: true, // 是否跨域
        //         // pathRewrite: {
        //         //     "^/shop": "" // 需要rewrite重写的
        //         // }
        //     },
        // },
        // before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
                'images': resolve('src/images')
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        // '@green': '#f20000'
                        prependData: `true;@import "${path.resolve(
              __dirname,
              'src/assets/style/theme/theme.less'
            )}"`
                    }
                }
            },
            sass: {
                additionalData: `@import "~@/style/mixin.scss";`
            },
            scss: {
                additionalData: `@import "~@/style/mixin.scss";`
            }
        }
    },
    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}