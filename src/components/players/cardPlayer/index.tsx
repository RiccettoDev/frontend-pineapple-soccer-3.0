import { Button, Flex, Text } from "@chakra-ui/react";

import { colors } from "@/styles/colors";

import { User } from "@/interface/user";
import { Stars } from "../stars";

interface UserProps {
  user: User;
}

export function CardPlayer({ user }: UserProps) {
  return (
    <Flex 
      bg={colors.blue} 
      w={"100%"} 
      p={4} 
      borderRadius="8px" 
      boxShadow={"2xl"}
      mb={2}
    >
      <Flex w={"40%"} direction={"column"} justifyContent={"center"} align={"center"}>
        Image
        <Stars key={user.id} user={user} />
      </Flex>
      <Flex w={"60%"} direction={"column"} position={"relative"}>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Nome: </Text>
          <Text color={colors.lime}>{user.name}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Sobrenome: </Text>
          <Text color={colors.lime}>{user.surname}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Vigor: </Text>
          <Text color={colors.lime}>{user.force}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Ataque: </Text>
          <Text color={colors.lime}>{user.attack}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Defesa: </Text>
          <Text color={colors.lime}>{user.defense}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Chute: </Text>
          <Text color={colors.lime}>{user.kick}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Passe: </Text>
          <Text color={colors.lime}>{user.pass}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white} flexDirection={"row"}>Cabeceio: </Text>
          <Text color={colors.lime}>{user.headbutt}</Text>
        </Flex>
        <Button
          w={"20%"}
          position={"absolute"}
          right={0} 
          bg={colors.yellow} 
          color={colors.blue} 
          border={`1px solid ${colors.blue}`} >
            vote
        </Button>
      </Flex>
    </Flex>
  );
}
