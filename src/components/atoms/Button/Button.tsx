import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    text: string;
    disabled?: boolean;
    onPress: ()=>void;
}

export const Button: FC<Props> = ({
    text, 
    disabled=false,
    onPress,
})=>{
    return(<>
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={
                styles.container
            }
        >
            <Text style={ styles.textStyle} >{text}</Text>
        </TouchableOpacity>
    </>)
}

const styles = StyleSheet.create({
    container : {
        height : 15,
        width : 80,
        backgroundColor : "blue",
        borderRadius : 10
    },
    textStyle : {
        color : "white",
        textAlign : "center",
        fontSize : 10
    }
})