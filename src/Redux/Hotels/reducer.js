import { get_hotel_fail, get_hotel_req, get_hotel_success } from "./actionTypes";

const initialState={
    hotels:[],
    isLoading:false,
    isError:false,
}

export const reducer =(state=initialState, {type,payload})=>{
    switch (type) {
            case get_hotel_req:
                return {...state, isLoading:true};
            case get_hotel_success:
                return {...state, isLoading:false,hotels:payload}
            case get_hotel_fail:
                return {...state, isLoading:false,isError:true}
        default:
            return state;
    }
}