import { getPost, getPosts} from "../types/types"

type initialStateType={
    posts:Array<any>,
    post:object,
    limit:number,
}
const initialState:initialStateType={
    posts:[],
    post:{},
    limit:6,
}

export const postReducer = ( state = initialState , action )=>{
    switch (action.type){
        case getPosts:{
            return {
                ...state,
                limit:state.limit + 6 ,
                posts:action.payload
            }
        }
        case getPost:{
            return {
                ...state,
                post:action.payload
            }
        }
        default: return state
    }
}