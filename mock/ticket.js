const { randomNum } = require('./utils')
module.exports = [{
        url: '/getTicketsList',
        type: 'post',
        response: config => {
            let list = []
            const total = 18
            for (let i = 0; i < total; i++) {
                let obj = {
                    id: i,
                    sortId: i,
                    areaId: i,
                    areaName: "区域名称",
                    enableRule: randomNum(), //生效规则 0：即时 1：次月
                    disableRule: randomNum(), //失效规则 0：自然失效（一个月按31天） 1：跨月失效
                    enableTimes: randomNum(), //是否计次（0，计次，1：不计次）
                    maxCount: randomNum([10, 1, 2, 3, 21, 12, 33]), //次数（计次时有效）
                    name: `定期票名称${i}`, //定期票名称
                    notes: "备注", //备注
                    price: `${i + 43}`, //票价（元）
                    sellingCount: `${i + 13}`, //最大购买数量
                    sellingTime: "2021-1-20 16:00:51 至 2021-1-20 16:00:55", //销售截止时间
                    ticType: randomNum([0, 1, 2, 3]) //定期票类型（0：次 1：月 2：季 3：年）
                }
                list.push(obj)
            }
            return {
                code: "200",
                data: {
                    page: 1,
                    pageTotal: 2,
                    total: total,
                    record: list
                }
            }
        }
    },
    //下单改变购买数量
    {
        url: '/updateBuyCount',
        type: 'post',
        response: config => {
            return {
                code: "200",
                msg: "",
                totalCount: "",
                data: {
                    statDate: `2021-1-${randomNum([1, 2, 3, 4])}`,
                    endDate: `2021-1-${randomNum([11, 12, 13, 14])}`,
                    days: randomNum([30, 11, 42, 23]),
                    payAmount: randomNum([320, 121, 412, 263]),
                }
            }
        }
    },
    //支付
    {
        url: '/paymentTicket',
        type: 'post',
        response: config => {
            return {
                code: "200",
                msg: "",
                totalCount: "",
                data: {
                    thirdNo: "121211231342423"
                }
            }
        }
    },
    //支付结果
    {
        url: '/saveBuyTickets',
        type: 'post',
        response: config => {
            return {
                code: randomNum([-1, 200]),
                msg: "支付成功"
            }
        }
    },
    //获取我的定期票列表
    {
        url: '/getBindSepTicHisByUser',
        type: 'post',
        response: config => {
            let list = []
            const total = 18
            for (let i = 0; i < total; i++) {
                let obj = {
                    id: i,
                    sortId: i,
                    outId: i, //员工工号
                    userId: i,
                    sepTicId: i, //定期票id
                    amount: randomNum([50, 31, 32, 43, 21, 122, 33]), //定期票单价
                    buyCounts: randomNum([10, 1, 2, 3, 21, 12, 33]), //11
                    orderDate: "2021-1-20 16:00:51",
                    payAmount: randomNum([320, 121, 412, 263]),
                    thirdNo: "312312312312312312",
                    thirdType: "0", //支付渠道  0:完美企业APP
                    ticketName: `定期票名称${i}`, //定期票名称,
                    transNum: "51345145134513413 ", //交易编号
                    useStartDate: `2021-1-${randomNum([1, 2, 3, 4])}`,
                    useEndDate: `2021-1-${randomNum([11, 12, 13, 14])}`,
                    userName: "老王" //
                }
                list.push(obj)
            }
            return {
                code: "200",
                data: {
                    page: 1,
                    pageTotal: 2,
                    total: total,
                    record: list
                }
            }
        }
    },
    //获取我的定期票可使用日期
    {
        url: '/getBindSepTicDateByUser',
        type: 'post',
        response: config => {
            return {
                code: "200",
                msg: "",
                data: {
                    totalStartDate: `2021-01-0${randomNum([1, 2, 3, 4])}`,
                    totalEndDate: `2022-01-0${randomNum([1, 2, 3, 4])}`,
                }
            }
        }
    },
]