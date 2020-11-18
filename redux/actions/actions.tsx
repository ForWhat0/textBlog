import {getPosts, getPost, hideLoader, showLoader, showAlert, hideAlert, createPost} from '../types/types'
import axios from 'axios'


 export function ShowAlert(text:string,type:string){
    return dispatch=>{
        dispatch({
            type:showAlert,
            payload:{
                text,
                type
            }
        })
            setTimeout(()=>{
                dispatch(HideAlert())
            },3000)
    }
}

 function HideAlert(){
    return{
        type:hideAlert
    }
}

export function ShowLoader(){
    return{
        type:showLoader
    }
}

 export function HideLoader(){
    return{
        type:hideLoader
    }
}

export function actionGetPosts(limit:string | number){
    return async dispatch=>{
        try{
          dispatch(ShowLoader())
          const data = await axios.get(`https://simple-blog-api.crew.red/posts?_limit=${limit}`)
            dispatch({type:getPosts,payload:data.data})
            dispatch(HideLoader())
        }
        catch (e){
          dispatch(ShowAlert(e.message,'error'))
            dispatch(HideLoader)
        }
    }

}

export function actionGetPost(id: string | string[]){
    return async dispatch=>{
        try{
            dispatch(ShowLoader())
            const data = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`)
            dispatch({type:getPost,payload:data.data})
            dispatch(HideLoader())
        }
        catch (e){
            dispatch(ShowAlert(e.message,'error'))
            dispatch(HideLoader)
        }
    }
}
type actionCreatePostTextType ={
    title:string,
    body:string
}
export function actionCreatePost(text:actionCreatePostTextType){
    return async dispatch=>{
        const middleware =  await  dispatch({type:createPost,payload:text.title})
        if (middleware === 'error'){
            return
        }
        try{
            dispatch(ShowLoader())
            const data = await axios({
                method: 'post',
                url: 'https://simple-blog-api.crew.red/posts',
                data: {
                    title: text.title,
                    body: text.body
                }
            })
            dispatch(HideLoader())
            dispatch(ShowAlert('Post is created','success'))
        }
        catch (e){
            dispatch(HideLoader)
            dispatch(ShowAlert(e.message,'error'))
        }
    }
}