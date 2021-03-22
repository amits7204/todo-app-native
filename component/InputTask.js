import React, {useState, useEffect, useMemo} from 'react'
import {SafeAreaView, TextInput, FlatList, View, Text, AsyncStorage, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'
import Item from './Item'
var uuid = require('react-native-uuid');
export default class InputTask extends React.Component{
        todoList = []
        state = {
            text: '',
            item: [
                {
                    id: '',
                    task: ''
                }
            ]
        }

    handleOnSubmit=async()=>{
        
        this.todoList.push({id: uuid(), task: this.state.text})
        await AsyncStorage.setItem('todoList', JSON.stringify(this.todoList))
        this.setState({item: JSON.parse(await AsyncStorage.getItem('todoList'))})
        console.log('DATA: ', this.state.item);
    }

    onSelected = (item) =>{
        console.log("ITEM: ", item)
    }

    renderItem = ({item})=>{
        console.log("renderItem: ", item.task)
        return(
            <Item
                item = {item}
                onPress={()=>this.onSelected(item)}
                style={{backgroundColor: "#1C395F"}}
            />
        )
    }

    render(){
        console.log("Render: ",this.state.item)
        return(
        <SafeAreaView style={styles.contain}>
            <Text style={styles.headerText}>Today's Task</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputTask}
                placeholder="Enter a task"
                onChangeText={text => this.setState({text})}
                value={this.state.text}/>
                <Button mode='contained' style={styles.taskButton} onPress={this.handleOnSubmit}>Add</Button>
            </View>
            <FlatList 
                data={this.state.item}
                renderItem={this.state.item[0].id===""?'':this.renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>)
    }   
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: '40%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: 120,
    },
    inputTask: {
        height: 40,
        width: 200,
        paddingLeft: 10,
        borderColor: '#1C395F',
        borderRadius: 16,
        borderWidth: 1
    }, 
    taskButton: {
        height: 40,
        width: 90,
        borderRadius: 16,
        backgroundColor: '#1C395F',
        color: '#f6f6f6',
        fontWeight: 'bold',
        textTransform: 'none'
    },
    headerText:{
        fontSize: 24,
        color: "#1C395F",
        fontWeight: 'bold',
        top: 80,
        left: '8%'
    },
    contain: {
        backgroundColor: '#D0D9E1',
        width: '100%',
        height: '100%'
    }
})