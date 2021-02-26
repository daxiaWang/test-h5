import request from './request'

export function login(params) {
    // 登录
    return request({
        url: '/user/login',
        method: 'post',
        params
    })
}

export function getTicketsList(params) {
    return request({
        url: '/getTicketsList',
        method: 'post',
        params
    })
}
export function updateBuyCount(params) {
    return request({
        url: '/updateBuyCount',
        method: 'post',
        params
    })
}
//支付
export function paymentTicket(params) {
    return request({
        url: '/paymentTicket',
        method: 'post',
        params
    })
}
//下单改变购买数量
export function saveBuyTickets(params) {
    return request({
        url: '/saveBuyTickets',
        method: 'post',
        params,
        headers: {
            noLoading: false
        }
    })
}
//获取我的定期票列表
export function getBindSepTicHisByUser(params) {
    return request({
        url: '/getBindSepTicHisByUser',
        method: 'post',
        params,
        headers: {
            noLoading: false
        }
    })
}
//获取我的定期票可使用日期
export function getBindSepTicDateByUser(params) {
    return request({
        url: '/getBindSepTicDateByUser',
        method: 'post',
        params,
        headers: {
            noLoading: false
        }
    })
}