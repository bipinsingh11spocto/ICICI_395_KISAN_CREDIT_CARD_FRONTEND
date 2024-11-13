
import ApiConstant from "../constants/ApiConstant";
import { routePath, sessionVariable } from "../constants/variableConst";
import { encrypt } from "../util/crypto"
import HttpClient from "../util/httpClient"


/*
 * All function here is used for API calling.
 * @param {*} payload 
 * @returns 
 */
export async function addEvents(payload) {
    try {
        payload['sessionId'] = sessionStorage.getItem(sessionVariable.SESSION_ID);
    } catch (err) {
        payload['sessionId'] = "";
    }
    if (!payload['accountNo']) {
        payload['accountNo'] = sessionStorage.getItem('mask');
    }
    return new Promise((resolve, reject) => {
        HttpClient.post(`${ApiConstant}${routePath.ADD_LOG}`, { "payload": encrypt(payload) })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export async function getPrevData(payload) {
    return new Promise((resolve, reject) => {
        HttpClient.post(`${ApiConstant}${routePath.GET_CUSTOMER_DETAILS}`, { "payload": encrypt(payload) })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export async function srGeneration(payload) {
    return new Promise((resolve, reject) => {
        HttpClient.post(`${ApiConstant}${routePath.SR_GENERATE}`, { "payload": encrypt(payload) })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export async function SRCallConnect(payload) {
    return new Promise((resolve, reject) => {
        HttpClient.post(`${ApiConstant}${routePath.KALERYA_CONNECT}`, { "payload": encrypt(payload) })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export async function SRCallStatus(payload) {
    return new Promise((resolve, reject) => {
        HttpClient.post(`${ApiConstant}${routePath.KALERYA_CONNECT_STATUS}`, { "payload": (payload) })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}