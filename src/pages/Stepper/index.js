import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";

export default function Stepper() {
  const [step, setStep] = useState(0);
  const [stepOneValues, setStepOneValues] = useState({
    altSelimInputValue: "",
    desSelimInputValue: "",
    recuoSelimInputValue: "",
    desSelimManoplaInputValue: "",
    altSelimManoplaInputValue: "",
    reachManoplaInputValue: "",
    stackManoplaInputValue: "",
  });
  const [stepTwoValues, setStepTwoValues] = useState({
    altSelimInputValue: "",
    desSelimInputValue: "",
    recuoSelimInputValue: "",
    desSelimManoplaInputValue: "",
    altSelimManoplaInputValue: "",
    reachManoplaInputValue: "",
    stackManoplaInputValue: "",
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInX"
          source={require("../../assets/logoFullBike.png")}
          style={{ width: "50%" }}
          resizeMode="contain"
        />
        <Animatable.Text
          style={styles.title}
          animation="fadeInLeft"
          delay={500}
        >
          Setup da Bike
        </Animatable.Text>
      </View>
      <View style={styles.divider} />
      <Animatable.View style={styles.containerStepper}>
        {step == 0 ? (
          <StepOne
            setStep={setStep}
            step={step}
            stepOneValues={stepOneValues}
            setStepOneValues={setStepOneValues}
          />
        ) : step == 1 ? (
          <StepTwo
            setStep={setStep}
            step={step}
            stepTwoValues={stepTwoValues}
            setStepTwoValues={setStepTwoValues}
          />
        ) : (
          <StepThree setStep={setStep} step={step} />
        )}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLogo: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#B22222",
    alignSelf: "center",
  },
  divider: {
    marginTop: 15,
    borderBottomWidth: 3,
    width: "95%",
    alignSelf: "center",
    borderColor: "#a1a1a1",
  },
  containerStepper: {
    padding: "8%",
    height: "100%",
  },
});
