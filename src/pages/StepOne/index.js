import { VStack, HStack, Center,Heading } from 'native-base'
import Input from '../../components/Input/input';
import { Button } from '../../components/Button/Button';

export function StepOne({ step , setStep }) {
 return (
    <>
        <VStack h='100%'>
            <Center mb={4}>
                <Heading>Pré Fit</Heading>
            </Center>
            <HStack space={4} > 
                <Input flex={1} placeholder="Alt. Selim"/>
                <Input flex={1} placeholder="Des. do Selin"/>    
            </HStack>
            <HStack space={4} > 
                <Input flex={1} placeholder="Recuo do Selim"/>
                <Input flex={1} placeholder="Des. Selim Man"/>    
            </HStack>
            <HStack space={4} > 
                <Input flex={1} placeholder="Alc. Selim Man"/>
                <Input flex={1} placeholder="Reach manoplas"/>    
            </HStack>
            <HStack space={4} > 
                <Input flex={1} placeholder="Stack Manoplas"/>
            </HStack>
            <Center mb={4}>
                <Button title='Próximo' onPress={()=> {
                    setStep(step+1)
                }} />
            </Center>
    </VStack>
  </>
  );
}