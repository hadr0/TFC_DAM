import * as React from "react";
import { Text, Pressable } from "react-native";
import { CardStyle } from "../styles/CardStyles";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable
      style={isTurnedOver ? CardStyle.cardUp : CardStyle.cardDown}
      onPress={onPress}
    >
      {isTurnedOver ? (
        <Text style={CardStyle.text}>{children}</Text>
      ) : (
        <Text style={CardStyle.text}>?</Text>
      )}
    </Pressable>
  );
}
