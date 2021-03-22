import React, {useState, useEffect, useMemo} from 'react'
import {SafeAreaView, TextInput, FlatList, View, Text, AsyncStorage, StyleSheet} from 'react-native'
import {Button, IconButton} from 'react-native-paper'
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
        let filteredArray = this.state.item.filter(task => task !== item)
        this.setState({item: filteredArray});
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
            <FlatList 
                data={this.state.item}
                renderItem={this.state.item[0].id===""?'':this.renderItem}
                keyExtractor={item => item.id}
                style={styles.listContainer}
            />
            <View style={styles.container}>
                <TextInput style={styles.inputTask}
                placeholder="Enter a task"
                onChangeText={text => this.setState({text})}
                value={this.state.text}/>
                <IconButton size={25} color='#D0D9E1' icon='send' style={styles.taskButton} onPress={this.handleOnSubmit} />
            </View>
        </SafeAreaView>)
    }   
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: '8%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
    },
    inputTask: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#1C395F',
        borderRadius: 16,
        borderWidth: 1
    }, 
    taskButton: {
        borderRadius: 50,
        backgroundColor: '#1C395F',
        
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
    },
    listContainer: {
        marginTop: 100
    }
})