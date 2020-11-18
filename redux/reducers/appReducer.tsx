import {hideLoader,showLoader, showAlert, hideAlert} from '../types/types'

type initialStateType={
    loading:boolean,
    alert: string |null,
    title:string,
    type:string
}

const initialState:initialStateType = {
    loading:false,
    alert:null,
    title:'HOME',
    type:'success'
}

export const appReducer = ( state = initialState,action ) =>{
    switch (action.type){
        case showLoader:{
            return {
                ...state,
                loading: true
            }
        }
        case hideLoader:{
            return {
                ...state,
                loading: false
            }
        }
        case showAlert:{
            return {
                ...state,
                type:action.payload.type,
                alert: action.payload.text
            }
        }
        case hideAlert:{
            return {
                ...state,
                alert: null
            }
        }
        default:return state
    }
}