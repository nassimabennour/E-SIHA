import React, { FC } from "react";
import { RadioButton } from "react-native-paper"

type Props = {
    value : string;
    status: "checked" | "unchecked" | undefined;
    //disabled?: boolean;
    //onPress : () => void;
    color?: string;
}

export const RadioBttn : FC<Props> = ({
    value,
    status,
    color="blue"
}) => {
    return(
        <RadioButton
            value={value}
            status={status}
            color={color}
        />
    )
}