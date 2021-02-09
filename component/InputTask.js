import React, {useState, useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TextInput, View, Text, Button} from 'react-native'
import {addToTask} from '../redux/actionCreator'

export default function InputTask(){
    const [task, setTask] = useState('')
    const [save, setSave] = useState([])
    const dispatch = useDispatch();

    const getTask = useSelector((state)=>state.Reducer.task)
    console.log("Amit Task: ",getTask)

    const handleOnSubmit=()=>{
        setSave([...save, task])
        
        dispatch(addToTask(save))
    }
    

    const handleOnChange = (text) =>{
        // console.log("text", text)
        setTask(text)
    }
    // console.log("save: ",save)

    return(<View>
        <TextInput style={{height: 40}}
        placeholder="Enter a task"
        onChangeText={handleOnChange}
        defaultValue={task}/>
        <Button title="Add" onPress={handleOnSubmit}/>
        
        {save?.map(item=> 
            <Text key={item}>{item}</Text>
         )}
    </View>)
}