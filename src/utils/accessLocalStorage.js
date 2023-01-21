import { json } from "react-router-dom";

export const getLocalData = (key) => {
    try {
        let temp = JSON.parse(localStorage.getItem(key))
        return temp
    } catch (e) {
        return undefined
    }
}


export const setLocalDate = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}



localStorage.setItem("usermame ", JSON.stringify(1))