import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../Redux/Hotels/action';
import Card from "../card/Card"
import {useLocation, useSearchParams} from "react-router-dom";
import Style from "./CardList.module.css"
import { getLocalData } from '../../utils/accessLocalStorage';

const CardList = () => {
  const dispatch=useDispatch();
  const Hotels=useSelector((store)=>store.HotelsReducer.hotels);
  const [searchParams]= useSearchParams();
  const location=useLocation();
  const [order,setOrder]=useState("")

    //sorting function
    const handleSorting=(e)=>{
      setOrder(e.target.value);
    }
let text=getLocalData('searchvalue')
    useEffect(()=>{
      let paramObj={
        params:{
          review:searchParams.getAll("review")
        }
      }
        dispatch(getHotels(paramObj,text))
    },[location.search]);

  return (
    <div>
      <div className={Style.SortByContainer}>
      <div>
        <p className={Style.noOfProperty}>{Hotels.length} properties</p>
      </div>
        <form>
          <select name='sort' id='sort' onChange={handleSorting} className={Style.SortBySelectContainer}>
            <option value="">Sort By Price</option>
            <option  value="asc">Price: low to high</option>
            <option  value="desc">Price: high to low</option>
            <option disabled></option>
          </select>
        </form>
        
      </div>
      {Hotels.length>0 && Hotels.map((ele,index)=>{
        return <Card key={ele.id} hotel={ele} />
      })}
     
    </div>
  )
}

export default CardList