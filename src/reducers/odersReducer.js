import { SEARCH_SUCCESS,SHEARCH_REQ,SERACH_ERROR } from "../actions/types";






export const searchItems =(state={loading:false},action)=>{
 switch (action.type) {
    case SHEARCH_REQ:
       return {...state,loading:true}
    case SEARCH_SUCCESS:
       return{...state,loading:false,allPorducts:action.payload}
    case SERACH_ERROR:
      return{loading:false,error:action.payload}

    default:
       return state
 }
}