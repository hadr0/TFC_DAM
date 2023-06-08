import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MathStyle } from '../styles/MathStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const bgImage = require("../assets/mathWallpaper.jpg")

export default function MathLv3Screen({ navigation }) {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const sum = number1 + number2;
    const sub = number1 - number2;
    const mult = number1 * number2;
    const div = number1 / number2;

    useEffect(() => {
        generateRandomNumbers();
    }, []);

    const generateRandomNumbers = () => {
        let num1 = Math.floor(Math.random() * 90) + 1;
        let num2 = Math.floor(Math.random() * 10) + 5;

        while (num1 % num2 !== 0 || num2 >= num1) {
            num1 = Math.floor(Math.random() * 90) + 1;
            num2 = Math.floor(Math.random() * 10) + 5;
        }

        setNumber1(num1);
        setNumber2(num2);
    };


    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');

    const checkInputValue1 = (text) => {
        setInputValue1(text);
    };
    const checkInputValue2 = (text) => {
        setInputValue2(text);
    };
    const checkInputValue3 = (text) => {
        setInputValue3(text);
    };
    const checkInputValue4 = (text) => {
        setInputValue4(text);
    };

    const countOk1 = () => inputValue1 == sum;
    const countOk2 = () => inputValue2 == sub;
    const countOk3 = () => inputValue3 == mult;
    const countOk4 = () => inputValue4 == div;
    
    const didPlayerWin = () =>
        inputValue1 == sum &&
        inputValue2 == sub &&
        inputValue3 == mult &&
        inputValue4 == div;

    


    return (
        <SafeAreaView style={MathStyle.container}>
            <ImageBackground source={bgImage} resizeMode="cover" style={MathStyle.bgImage}>
                <View style={MathStyle.view}>
                    <Text style={MathStyle.text}>{number1} + {number2} = </Text>
                    <TextInput
                        style={MathStyle.input}
                        placeholder='?'
                        placeholderTextColor="#eb9d38"
                        keyboardType='numeric'
                        onChangeText={checkInputValue1} />
                    {countOk1()? <Ionicons name="checkmark-circle-outline" size={40} color="#eb9d38" style={{marginLeft: 30}} /> : ""}
                </View>
                <View style={MathStyle.view}>
                    <Text style={MathStyle.text}>{number1} - {number2} = </Text>
                    <TextInput
                        style={MathStyle.input}
                        placeholder='?'
                        placeholderTextColor="#eb9d38"
                        keyboardType='numeric'
                        onChangeText={checkInputValue2} />
                    {countOk2() ? <Ionicons name="checkmark-circle-outline" size={40} color="#eb9d38" style={{marginLeft: 30}} /> : ""}
                </View>
                <View style={MathStyle.view}>
                    <Text style={MathStyle.text}>{number1} x {number2} = </Text>
                    <TextInput
                        style={MathStyle.input}
                        placeholder='?'
                        placeholderTextColor="#eb9d38"
                        keyboardType='numeric'
                        onChangeText={checkInputValue3} />
                    {countOk3() ? <Ionicons name="checkmark-circle-outline" size={40} color="#eb9d38" style={{marginLeft: 30}} /> : ""}
                </View>
                <View style={MathStyle.view}>
                    <Text style={MathStyle.text}>{number1} ÷ {number2} = </Text>
                    <TextInput
                        style={MathStyle.input}
                        placeholder='?'
                        placeholderTextColor="#eb9d38"
                        keyboardType='numeric'
                        onChangeText={checkInputValue4} />
                    {countOk4() ? <Ionicons name="checkmark-circle-outline" size={40} color="#eb9d38" style={{marginLeft: 30}} /> : ""}
                </View>

                {didPlayerWin() ?
                    <Text style={MathStyle.title}>¡Enhorabuena! 🎉</Text>
                    : ""}

                {didPlayerWin() ?
                    <View style={MathStyle.view2}>
                        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                            <Text style={MathStyle.btn2}>Ir al menu</Text>
                        </TouchableOpacity>
                    </View>
                    : ""}

            </ImageBackground>
        </SafeAreaView>

    )
}