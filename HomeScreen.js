import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "./styles";

function HomeScreen({ navigation }) {
  const [role, setRole] = useState(null);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    navigation.navigate("Game", { role: selectedRole });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Scotland Yard!</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => handleRoleSelection("Detective")}
      >
        <Text style={globalStyles.buttonText}>Play as Detective</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => handleRoleSelection("Mr. X")}
      >
        <Text style={globalStyles.buttonText}>Play as Mr. X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

