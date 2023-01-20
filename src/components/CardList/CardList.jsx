import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../Redux/Hotels/action';
import Card from "../card/Card"


const CardList = () => {


   const dispatch=useDispatch();
    const Hotels=useSelector((store)=>store.HotelsReducer.hotels);
    console.log(Hotels)

    
    useEffect(()=>{
        dispatch(getHotels)
    },[]);

  return (
    <div>
      {Hotels.length>0 && Hotels.map((ele,index)=>{
        return <Card key={ele.id} hotel={ele} />
      })}
     
    </div>
  )
}

export default CardList