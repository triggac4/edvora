import { SET_ALL_CITY,SET_ALL_STATE,SET_SELECTED_CITY,SET_SELECTED_STATE} from "./action"
const initialState = {
    allState:[],
    allCity:[],
    selectedState:"all",
    selectedCity:"all",
}


export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_ALL_STATE:
            return{
                ...state,
                allState:action.payload
            }
        case SET_ALL_CITY:
            return{
                ...state,
                allCity:action.payload
            }
        case SET_SELECTED_STATE:
            return{
                ...state,
                selectedState:action.payload
            }
        case SET_SELECTED_CITY:
            return{
                ...state,
                selectedCity:action.payload
            }
        default:
            return state
    }
}