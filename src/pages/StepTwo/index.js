import { VStack, HStack, Center,Heading } from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import Input from '../../components/Input/input';
import { Button } from '../../components/Button/Button';

export function StepTwo({ step , setStep }) {
 return (
    <>
        <VStack h='100%'>
            <Center mb={4}>
                <Heading>Pós Fit</Heading>
            </Center>
            <HStack space={4} > 
                    <Input flex={1} placeholder="Alt. Selim" keyboardType='numeric'/>
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
            <HStack space={4} > 
                <Button flex={1} title='Voltar' onPress={()=> {
                    setStep(step-1)
                }} />
                <Button flex={1} title='Próximo' onPress={()=> {
                    setStep(step+1)
                }} />
            </HStack>
           
    </VStack>
  </>
  );
}