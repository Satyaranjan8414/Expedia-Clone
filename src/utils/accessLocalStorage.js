import { json } from "react-router-dom";

const getLocalData = (key) => {
    try {
        let temp = localStorage.getItem(key);
        temp = JSON.stringify(localStorage.getItem(key));
        return temp
    } catch (e) {
        return undefined
    }
}


const setLocalDate = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}