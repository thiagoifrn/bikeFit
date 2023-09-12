import {
  VStack,
  HStack,
  Center,
  Heading,
  Box,
  Text,
  AspectRatio,
  Image,
  Stack,
} from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from "../../components/Input/input";
import { Button } from "../../components/Button/Button";

import * as Animatable from "react-native-animatable";

export function StepThree({ step, setStep }) {
  return (
    <>
      <VStack h="100%">
        <Center mb={4}>
          <Heading>Stepper 3</Heading>
        </Center>
        <Box>
          <Image
            style={{ width: "100%" }}
            resizeMode="contain"
            size="xl"
            source={require("../../assets/mtb.png")}
            alt="Picture of a Flower"
          />
        </Box>
        <HStack space={4}>
          <Button
            flex={1}
            title="Voltar"
            onPress={() => {
              setStep(step - 1);
            }}
          />
        </HStack>
      </VStack>
    </>
  );
}
