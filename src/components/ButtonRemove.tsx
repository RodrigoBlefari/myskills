import React from "react";
import {
    StyleSheet,
    TouchableOpacity, 
    TouchableOpacityProps,
    Text
 } 
from "react-native";

interface RemoveButtonProps extends TouchableOpacityProps{
    title: String;
}
export function ButtonRemove({title, ...rest} : RemoveButtonProps){
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
        <Text
            style={styles.buttonText}
        > {title}</Text>
        </TouchableOpacity>
    )}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 15,
        marginVertical: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius:20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
})