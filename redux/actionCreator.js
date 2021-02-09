import {ADD_TO_TASK, DELETE_TO_TASK} from './actionType'

export const addToTask=(payload)=>{
    console.log("data: ",payload)
    return{
        type: ADD_TO_TASK,
        payload
    }
}
export const deleteToTask = (data)=>{
    return{
        type: DELETE_TO_TASK,
        payload: data
    }
}    
