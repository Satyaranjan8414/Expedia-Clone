import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookearlycard from "../../components/Bookearlycard/Bookearlycard";
import Loading from "../../components/Loader/Loading";
import { getHotel } from "../../Redux/HotelsData/action";
const Bookearly = () => {
  
  const hotelsData = useSelector((store) => store.HotelReducer.data)
  const isLoading = useSelector((store) => store.HotelReducer.isLoading)
console.log("book",isLoading)
useEffect(()=>{
  dispatch(getHotel("delhi"))
},[])

  const dispatch = useDispatch()
  const getDataHandler=()=>{
    // getHotel("delhi")
    // dispatch(getHotel("delhi"))
    console.log("getDataHandler")
  }
  if(isLoading){
  
      return <Loading />
    
 
    
  }
 
  return <div className=" px-8 py-4 grid grid-cols-3 gap-x-8 gap-y-8 content-center m-auto border-4">{
    hotelsData.length >0 && hotelsData.map((ele,index)=>(
      <Bookearlycard click={getDataHandler} key={index} {...ele}/>
    ))
  }</div>
};

export default Bookearly;
