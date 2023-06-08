import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import Card from "../containers/Card";
import shuffle from '../components/ShuffleCards';
import { CardStyle } from '../styles/CardStyles';

const cards = ["🗣️", "🦷", "🍑",];

const bgImage = require("../assets/cardWallpaper.jpg")

export default function Lv1Screen({ navigation }) {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards,]));
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const handleTapCard = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  };

  const didPlayerWin = () => matchedCards.length === board.length;

  return (
    <SafeAreaView style={CardStyle.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={CardStyle.bgImage}>
      {didPlayerWin() ?
        <View>
          <Text style={CardStyle.title}>¡Enhorabuena! 🎉</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CardLv2")}>
            <Text style={CardStyle.btn1}>Siguiente nivel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Text style={CardStyle.btn2}>Volver al menú</Text>
          </TouchableOpacity>
        </View> :

        <View>
          <Text style={CardStyle.title}>Intentos: {score}</Text>
          <View style={CardStyle.boardLv1}>
            {board.map((card, index) => {
              const isTurnedOver =
                selectedCards.includes(index) || matchedCards.includes(index);
              return (
                <Card
                  key={index}
                  isTurnedOver={isTurnedOver}
                  onPress={() => handleTapCard(index)}
                >
                  {card}
                </Card>
              );
            })}
          </View>
        </View>
      }
      </ImageBackground>
      
    </SafeAreaView>
  );
}



