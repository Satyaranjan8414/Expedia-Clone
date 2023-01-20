const { GET_HOTEL_REQUEST, GET_HOTEL_SUCCESS, GET_HOTEL_FAILURE } = require("./actionType")


const initState={
    isLoading:false,
    data:[],
    isError:false
}

export const reducer =(state = initState ,{type,payload})=>{
 

    switch(type){
        case GET_HOTEL_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_HOTEL_SUCCESS:{
            return {...state,isLoading:false,data:payload}
        }
        case GET_HOTEL_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        default : 
        return state
    }
}