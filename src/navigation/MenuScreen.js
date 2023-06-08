import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import  {MenuStyle}  from '../styles/MenuStyle';


export default function MenuScreen({ navigation }) {

    const bgImage = require("../assets/menuWallpaper.jpg")
    const btnImage1 = require("../assets/memory-game.png")
    const btnImage2 = require("../assets/calcGame.png")

    return (
        <View style={MenuStyle.view}>
        <ImageBackground source={bgImage} resizeMode="cover" style={MenuStyle.bgImage}>
            <Text style={MenuStyle.title}>Elige una opción</Text>
            <View style={MenuStyle.container}>
            <TouchableOpacity onPress={() => navigation.navigate("CardLv1")}>
                <Text style={MenuStyle.btn1}>Memorama</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MathLv1")}>
                <Text style={MenuStyle.btn2}>Calculo mental</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    )
}


