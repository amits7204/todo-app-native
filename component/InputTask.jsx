import React, {useState} from 'react'
import {TextInput, View, Text, Button} from 'react-native'

export default function InputTask(){
    const [task, setTask] = useState('')
    const [save, setSave] = useState([])
    const handleOnSubmit=()=>{
        setSave([...save, task])
    }
    const handleOnChange = (text) =>{
        // console.log("text", text)
        setTask(text)
    }
    console.log("save: ",save)

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