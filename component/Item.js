import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Checkbox} from 'react-native-paper'

export default function Item({ item, onPress, style }){
    console.log("ITEM: ",item)
    const [checked, setChecked] = useState(false);
    return(
        <View onPress={onPress} style={[styles.item, style]}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Text key={item.id} style={!checked?styles.taskItem:styles.completeTask}>{item.task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#1C395F',
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        // marginHorizontal: 8,
        borderRadius: 16,
        padding: 20,
        margin: '6%',
        alignItems: 'center'
    },
    taskItem: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#D0D9E1', 
    },
    completeTask: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#D0D9E1', 
        textDecorationLine: 'line-through',
    }
})