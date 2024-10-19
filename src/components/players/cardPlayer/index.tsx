import { Flex, Text } from "@chakra-ui/react";

import { colors } from "@/styles/colors";

interface UserProps {
  user: {
    id: number;
    name: string;
  };
}

export function CardPlayer({ user }: UserProps) {
  return (
    <Flex direction="column" p={4} border={`1px solid ${colors.white}`} borderRadius="8px" mb={2}>
      <Text fontWeight="bold">ID: {user.id}</Text>
      <Text>Nome: {user.name}</Text>
    </Flex>
  );
}
