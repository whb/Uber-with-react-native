import React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const Map = () => {
  return (
    <View className="w-full h-full rounded-2xl">
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType="mutedStandard"
        style={{ flex: 1 }}
        tintColor="black"
        showsPointsOfInterest={false}
        showsUserLocation={true}
        userInterfaceStyle="light"
      />
    </View>
  );
};

export default Map;
