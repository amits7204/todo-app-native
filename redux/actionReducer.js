import {ADD_TO_TASK, DELETE_TO_TASK} from './actionType'

const initialState = {
    task: []
}

const reducer = (state=initialState, {type, payload})=>{
    console.log("Payload: ", payload)
    switch(type){
        case ADD_TO_TASK:
            console.log("ADD_TO_TASK: ", payload)
            return{
                ...state,
                task: payload
            }
        case DELETE_TO_TASK: 
            return{
                ...state,
            }    
        default: return {state}    
    }
}
export default reducer