import { GoogleInputProps } from "@/types/type";
import React from "react";
import { View, Text } from "react-native";

const GoogleTextInput = ({
  icon,
  containerStyle,
  handlePress,
  initialLocation,
  textInputBackgroundColor,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 mb-5 p-2 ${containerStyle}`}
    >
      <Text>Search..</Text>
    </View>
  );
};

export default GoogleTextInput;
