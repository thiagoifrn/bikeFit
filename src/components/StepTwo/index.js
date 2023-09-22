import { useState } from "react";
import { VStack, HStack, Center, Heading } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from "../../components/Input/input";
import { Button } from "../../components/Button/Button";

export function StepTwo({ step, setStep, stepTwoValues, setStepTwoValues }) {
  const [stepTwoFormValues, setStepTwoFormValues] = useState(stepTwoValues);
  console.log(stepTwoFormValues);

  const handleChange = (text, name) => {
    setStepTwoFormValues({ ...stepTwoFormValues, [name]: text });
  };
  return (
    <>
      <VStack h="100%">
        <Center mb={4}>
          <Heading>Pós Fit</Heading>
        </Center>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Alt. Selim"
            value={stepTwoFormValues?.altSelimInputValue}
            onChangeText={(text) => {
              handleChange(text, "altSelimInputValue");
            }}
          />
          <Input
            flex={1}
            placeholder="Des. do Selim"
            value={stepTwoFormValues.desSelimInputValue}
            onChangeText={(text) => {
              handleChange(text, "desSelimInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Recuo do Selim"
            value={stepTwoFormValues.recuoSelimInputValue}
            onChangeText={(text) => {
              handleChange(text, "recuoSelimInputValue");
            }}
          />
          <Input
            flex={1}
            placeholder="Des. Selim Man"
            value={stepTwoFormValues.desSelimManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "desSelimManoplaInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Alt. Selim Man"
            value={stepTwoFormValues.altSelimManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "altSelimManoplaInputValue");
            }}
          />
          <Input
            flex={1}
            placeholder="Reach manoplas"
            value={stepTwoFormValues.reachManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "reachManoplaInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Stack Manoplas"
            value={stepTwoFormValues.stackManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "stackManoplaInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Button
            flex={1}
            title="Voltar"
            onPress={() => {
              setStep(step - 1);
              setStepTwoValues(stepTwoFormValues);
            }}
          />
          <Button
            flex={1}
            title="Próximo"
            onPress={() => {
              setStep(step + 1);
              setStepTwoValues(stepTwoFormValues);
            }}
          />
        </HStack>
      </VStack>
    </>
  );
}
