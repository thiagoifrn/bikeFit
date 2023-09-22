import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import { Box, CheckIcon, Text, HStack, Center } from "native-base";

import { StepOne } from "../../components/StepOne";
import { StepTwo } from "../../components/StepTwo";
import { StepThree } from "../../components/StepThree";
import CircleCustom from "../../icons/CircleCustom";

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
      <Center>
        <HStack w="full" my={2} justifyContent="space-around">
          <CircleCustom size={8} color="red.500" title="Pré-fit">
            {step === 0 ? (
              <Text fontSize="lg" fontWeight="bold" color="white">
                1
              </Text>
            ) : (
              <CheckIcon size={6} color="white" />
            )}
          </CircleCustom>

          <CircleCustom size={8} color="red.500" title="Pós-fit">
            {step <= 1 ? (
              <Text fontSize="lg" fontWeight="bold" color="white">
                2
              </Text>
            ) : (
              <CheckIcon size={6} color="white" />
            )}
          </CircleCustom>

          <CircleCustom size={8} color="red.500" title="Gerar relatório">
            {step <= 2 ? (
              <Text fontSize="lg" fontWeight="bold" color="white">
                3
              </Text>
            ) : (
              <CheckIcon size={6} color="white" />
            )}
          </CircleCustom>
        </HStack>
      </Center>
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
    width: "100%",
    alignSelf: "center",
    borderColor: "#a1a1a1",
  },
  containerStepper: {
    padding: "8%",
    height: "100%",
  },
});
