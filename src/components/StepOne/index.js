import { useState } from "react";
import { VStack, HStack, Center, Heading } from "native-base";
import Input from "../Input/input";
import { Button } from "../Button/Button";

export function StepOne({ step, setStep, stepOneValues, setStepOneValues }) {
  const [stepOneFormValues, setStepOneFormValues] = useState(stepOneValues);
  console.log(stepOneFormValues);

  const handleChange = (text, name) => {
    setStepOneFormValues({ ...stepOneFormValues, [name]: text });
  };

  return (
    <>
      <VStack h="100%">
        <Center mb={4}>
          <Heading>Pré Fit</Heading>
        </Center>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Alt. Selim"
            value={stepOneFormValues?.altSelimInputValue}
            onChangeText={(text) => {
              handleChange(text, "altSelimInputValue");
            }}
          />
          <Input
            flex={1}
            placeholder="Des. do Selim"
            value={stepOneFormValues.desSelimInputValue}
            onChangeText={(text) => {
              handleChange(text, "desSelimInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Recuo do Selim"
            value={stepOneFormValues.recuoSelimInputValue}
            onChangeText={(text) => {
              handleChange(text, "recuoSelimInputValue");
            }}
          />
          <Input
            flex={1}
            placeholder="Des. Selim Man"
            value={stepOneFormValues.desSelimManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "desSelimManoplaInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Alt. Selim Man"
            value={stepOneFormValues.altSelimManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "altSelimManoplaInputValue");
            }}
          />
          <Input
            flex={1}
            placeholder="Reach manoplas"
            value={stepOneFormValues.reachManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "reachManoplaInputValue");
            }}
          />
        </HStack>
        <HStack space={4}>
          <Input
            flex={1}
            placeholder="Stack Manoplas"
            value={stepOneFormValues.stackManoplaInputValue}
            onChangeText={(text) => {
              handleChange(text, "stackManoplaInputValue");
            }}
          />
        </HStack>
        <Center mb={4}>
          <Button
            title="Próximo"
            onPress={() => {
              setStep(step + 1);
              setStepOneValues(stepOneFormValues);
            }}
          />
        </Center>
      </VStack>
    </>
  );
}
