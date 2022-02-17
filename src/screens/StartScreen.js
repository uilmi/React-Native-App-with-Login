import React from "react";
import { View, StyleSheet } from "react-native";
import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";


export default function StartScreen() {
    return (
        <Background>
            <Logo />
            <Header>Login Template</Header>
            <Paragraph>
                The easiest way to start with your amazing application.
            </Paragraph>
            <Button mode="outlined">Login</Button>
            <Button mode="contained">Sign up</Button>
        </Background>
    )
}