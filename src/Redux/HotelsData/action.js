import axios from "axios"
import { GET_HOTEL_FAILURE, GET_HOTEL_REQUEST, GET_HOTEL_SUCCESS } from "./actionType"

 const getHotelReqeust = () => {
    return { type: GET_HOTEL_REQUEST}
}
 const getHotelSuccess = (payload) => {
    return { type: GET_HOTEL_SUCCESS,payload}
}
 const getHotelFailure = () => {
    return { type: GET_HOTEL_FAILURE}
}



export const getHotel=(place)=>(dispatch)=>{
    dispatch(getHotelReqeust())
    axios.get(`https://rose-repulsive-adder.cyclic.app/${place}`).then((res)=>{

    setTimeout(() => {
        dispatch(getHotelSuccess(res.data))
    },3000);
        // console.log(res.data)
    }).catch((err)=>{
        dispatch(getHotelSuccess())
        // console.log(err)
    })
}