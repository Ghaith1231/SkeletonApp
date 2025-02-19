import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "./styles";

function GameScreen({ route }) {
  const { role } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>You are playing as: {role}</Text>
      <Text style={globalStyles.boardText}>[Game board placeholder]</Text>
    </View>
  );
}

export default GameScreen;

