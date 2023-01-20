import axios from "axios"
import { get_hotel_fail, get_hotel_req, get_hotel_success } from "./actionTypes"


export const getHotelReqAction=()=>{
    return {
        type:get_hotel_req
    }
}

export const getHotelSuccessAction=(payload)=>{
    return {
        type:get_hotel_success,payload
    }
}

export const getHotelFailAction=()=>{
    return {
        type:get_hotel_fail
    }
}

export const getHotels=(val="pune") => (dispatch)=>{

    //need query compared and display according to 

    dispatch(getHotelReqAction());
    axios.get(`https://rose-repulsive-adder.cyclic.app/${val}`).then((res)=>{
        dispatch(getHotelSuccessAction(res.data)) 
    }).catch((err)=>{
        dispatch(getHotelFailAction())
    })
}