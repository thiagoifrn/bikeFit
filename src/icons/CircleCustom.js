import { HStack, Box, Text } from "native-base";

export default function CircleCustom({ title, color, size, children }) {
  return (
    <HStack display="flex" alignItems="center" space={2}>
      <Box
        size={size}
        borderRadius="full"
        bg={color}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
      <Text>{title}</Text>
    </HStack>
  );
}
