import React, { useState } from "react";
import { View, Image } from "react-native";
import { VStack, HStack, Center, Button, Text } from "native-base";

const images = [
  require("../../assets/1.png"),
  require("../../assets/2.png"),
  require("../../assets/3.png"),
];

export function StepThree({ step, setStep }) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonPress = (index) => {
    setSelectedButton(index);
  };

  return (
    <VStack flex={1}>
      <HStack
        space={12}
        w="100%"
        justifyContent="center"
        alignItems="center"
        d="flex"
      >
        <Button
          borderRadius={50}
          my={10}
          onPress={() => handleButtonPress(0)}
          bg="red.500"
        >
          <Text color="white" fontWeight="bold">
            MTB
          </Text>
        </Button>
        <Button
          borderRadius={50}
          my={10}
          onPress={() => handleButtonPress(1)}
          bg="red.500"
        >
          <Text color="white" fontWeight="bold">
            ROAD
          </Text>
        </Button>
        <Button
          borderRadius={50}
          my={10}
          onPress={() => handleButtonPress(2)}
          bg="red.500"
        >
          <Text color="white" fontWeight="bold">
            TRIAL
          </Text>
        </Button>
      </HStack>
      <View style={{ flex: 1, alignItems: "center" }}>
        {selectedButton !== null && (
          <Image
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
            source={images[selectedButton]}
          />
        )}
        <Center>
          <HStack space={4} my={4}>
            <Button
              _pressed={{ bg: "gray.50" }}
              flex={1}
              title="Voltar"
              bg="red.500"
              onPress={() => {
                setStep(step - 1);
              }}
            >
              <Text color="white" fontWeight="bold">
                Voltar
              </Text>
            </Button>
            <Button
              _pressed={{ bg: "white" }}
              flex={1}
              title="Visualizar"
              bg="red.500"
              onPress={() => {
                setStep(step + 1);
              }}
            >
              <Text color="white" fontWeight="bold">
                Imprimir
              </Text>
            </Button>
          </HStack>
        </Center>
      </View>
    </VStack>
  );
}
