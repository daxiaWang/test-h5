import request from './request'
// const APIURL = '/shuttle_internal/common/call.do'
const APIURL = "gateway/campus/cam_iface/invokFrontMethodForSys.action"
export function login(data) {
    // 登录
    return request({
        url: '/h5/login',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            loadingText: encodeURI('校验中')
        }
    })
}


// // /shop/mobileApiYt/takemeals
// export function checkCode(data) {
//     return request({
//         url: "/shop/mobileApiYt/checkCode",
//         method: 'post',
//         data: data,
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
// }


// export function calcDriverIncome(data) {
//     // 获取司机端收入
//     return request({
//         url: APIURL,
//         method: 'post',
//         data: data
//     })
// }

//  /getTicketsList

export function userLogin(data) {
    return request({
        url: APIURL,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}