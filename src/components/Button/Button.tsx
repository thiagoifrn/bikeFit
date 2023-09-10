import { Button as ButtonNativeBase, IButtonProps, Text} from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase 
        w="full"
        bg="red.500"
        _pressed={{
            bgColor: "red.400"
        }}
        {...rest}
        >
            <Text fontSize="lg" fontWeight="bold" color="white" >{title}</Text>
        </ButtonNativeBase>
    );
}