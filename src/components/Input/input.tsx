import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type Props = IInputProps & {
 messageError?: string | null;
}
export default function Input({messageError = null, ...rest }: Props) {
 return (
        <NativeBaseInput
            bg="gray.700"
            fontSize="md"
            flex={1} 
            mb={4}
            h={16}
            _focus={{
                bg:"red.50",
                borderBottomWidth: 1,
                borderColor: "red.500"
            }}
            
            w='100%'
            {...rest}
        />     
    );
}