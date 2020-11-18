import {createPost} from "../types/types";
import {HideLoader, ShowAlert} from "../actions/actions";

const spamWords = ['fuck','php']

export  function spamWordsFilterMiddleware({dispatch}){
     return function (next){
         return function (action){
             switch (action.type) {
                 case createPost: {
                     const spam = spamWords.filter(w=>action.payload.includes(w))
                     if (spam.length){
                         dispatch (HideLoader())
                         dispatch(ShowAlert("these are bad words, don't use them!",'error'))
                         return 'error'
                         break
                     }
                 }

                 default:
                     break;
             }
             return next(action)
         }
     }
}