import React from "react";
import { Container } from './style';
import { TextInput, TextInputProps } from "react-native";
import { PropsWithChildren} from "react";

export const Input: React.FunctionComponent<TextInputProps> =  ({ ...otherProps }:
    PropsWithChildren<TextInputProps>) => {
        return (
            <Container>
                <TextInput placeholderTextColor="rgb(192 ,192, 192)" { ...otherProps}>

                </TextInput>
            </Container>
        );
    };

