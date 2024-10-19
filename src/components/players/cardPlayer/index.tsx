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
      w={{ base: "100%", md: "80%", lg: "100%" }} // Ajusta a largura para telas menores
      p={4} 
      borderRadius="8px" 
      boxShadow={"2xl"}
      mb={2}
      direction={{ base: "column", md: "row" }} // Empilha no mobile, alinha em linha no desktop
    >
      <Flex 
        w={{ base: "100%", md: "40%" }} // Ocupa 100% da largura no mobile e 40% em telas maiores
        direction={"column"} 
        justifyContent={"center"} 
        align={"center"}
        mb={{ base: 4, md: 0 }} // Adiciona espaçamento no mobile entre as seções
      >
        Image
        <Stars key={user.id} user={user} />
      </Flex>
      
      <Flex 
        w={{ base: "100%", md: "60%" }} // Mesma lógica para a largura no mobile e desktop
        direction={"column"} 
        position={"relative"}
        gap={2} // Adiciona espaçamento entre os itens
      >
        <Flex gap={2}>
          <Text color={colors.white}>Nome: </Text>
          <Text color={colors.lime}>{user.name}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Sobrenome: </Text>
          <Text color={colors.lime}>{user.surname}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Vigor: </Text>
          <Text color={colors.lime}>{user.force}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Ataque: </Text>
          <Text color={colors.lime}>{user.attack}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Defesa: </Text>
          <Text color={colors.lime}>{user.defense}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Chute: </Text>
          <Text color={colors.lime}>{user.kick}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Passe: </Text>
          <Text color={colors.lime}>{user.pass}</Text>
        </Flex>
        <Flex gap={2}>
          <Text color={colors.white}>Cabeceio: </Text>
          <Text color={colors.lime}>{user.headbutt}</Text>
        </Flex>

        <Button
          w={{ base: "100%", md: "20%" }} // Botão ocupa toda a largura no mobile
          mt={{ base: 4, md: 0 }} // Adiciona margem superior no mobile
          position={{ base: "static", md: "absolute" }} // Alinha o botão no mobile de forma estática
          right={0} 
          bg={colors.yellow} 
          color={colors.blue} 
          border={`1px solid ${colors.blue}`}
        >
          vote
        </Button>
      </Flex>
    </Flex>
  );
}
