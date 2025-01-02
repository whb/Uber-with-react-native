import React from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";

const Payment = () => {
  const handlePayment = () => {
    console.log("Payment");
  };
  return (
    <CustomButton
      title="Confirm Ride"
      className="my-10"
      onPress={handlePayment}
    />
  );
};

export default Payment;
