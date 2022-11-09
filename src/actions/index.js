import pizza from "../apis/pizza"
import {data} from '../data'
import { ERROR, FETCH_PIZZAS, FETCH_PIZZAS_SUCCESS, SEARCH_SUCCESS, SERACH_ERROR, SHEARCH_REQ, SHOW_SIDEBAR } from "./types"

export const fetchPizzas=(category)=>async dispatch=>{
  dispatch({type:FETCH_PIZZAS,payload:[]})
  try{
     const filterData =  data.filter(item=>item.category===category)
     dispatch({type:FETCH_PIZZAS_SUCCESS,payload:[]})
     setTimeout(()=>{
      dispatch({type:FETCH_PIZZAS_SUCCESS,payload:filterData})
     },1000)
    
  }
  catch(e){
    console.log(e)
    dispatch({type:ERROR,payload:'Opps!,something went wrong'}) 
  }
  
  
}

export const searchProducts =(name)=>async dispatch=>{
  dispatch({type:SHEARCH_REQ})
  try{
const serachedData= data.filter(item=>item.name.toLowerCase().includes(name.toLowerCase()))
  dispatch({type:SEARCH_SUCCESS,payload:serachedData})
  }
  catch(error){
  dispatch({type:SERACH_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
  }
}

export const showSideBar=(boolean)=>{
  return {type:SHOW_SIDEBAR,payload:boolean}
}