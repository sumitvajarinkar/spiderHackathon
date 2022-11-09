
import { ADDRESS_ERROR, ADD_ADDRESS } from "../actions/types";
export const addressReducer=(state={addressItems:[]},action)=>{
  switch (action.type) {
      case ADD_ADDRESS:
        return {...state,addressItems:[...state.addressItems,action.payload]}  
      case ADDRESS_ERROR:
        return{...state,error:action.payload}
      default:
          return state
  }
}
