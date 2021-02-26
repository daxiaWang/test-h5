import request from '../services/request'
const APIURL = '/gateway/campus/cam_iface/invokFrontMethodForSys.action' //网关地址

// export function getVehicleDispatchList(data, showLoading = false) {
//     // 获取派车管理列表
//     // const page = JSON.parse(JSON.parse(data.data).param).page
//     return request({
//         url: APIURL,
//         method: 'post',
//         data: data,
//         headers: {
//             noLoading: showLoading ? false : true
//         }
//     })
// }

///shop/mobileApiYt/bind
export function areaPlace(data) {
    return request({
        url: APIURL,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            // loadingText: encodeURI('校验中')
        }
    })
}