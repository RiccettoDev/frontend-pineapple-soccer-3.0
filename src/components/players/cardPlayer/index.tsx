"use client";

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "@/styles/colors";
import { User } from "@/interface/user";
import { Stars } from "../stars";
import { useState } from "react";
import { CardVote } from "../cardVote";

interface UserProps {
  user: User;
}

export function CardPlayer({ user }: UserProps) {
  const [cardVoteIsVisible, setCardVoteIsVisible] = useState(false); // Começa como invisível

  const closeModalVote = () => { // Define a função corretamente
    setCardVoteIsVisible(false);
  };

  return (
    <Flex 
      bg={colors.blue} 
      w={{ base: "130%", md: "80%", lg: "100%" }} 
      p={4} 
      borderRadius="8px" 
      boxShadow={"2xl"}
      mb={2}
      direction={{ base: "column", md: "row" }}
    >
      <Flex 
        w={{ base: "100%", md: "40%" }} 
        h={{ base: "150px", md: "100%" }}
        direction={"column"} 
        justifyContent={"center"} 
        align={"center"}
        mb={{ base: 4, md: 0 }} 
      >
        <Flex w={"70%"} h={"80%"} mb={4} justifyContent={"center"} alignItems={"center"} p={4} border={"1px solid #FFF"}>
          <Image 
            src={user.image} 
            alt="Image player"
            w={"80%"} 
          />
        </Flex>
        <Stars key={user.id} user={user} />
      </Flex>
      
      <Flex 
        w={{ base: "100%", md: "60%" }} 
        direction={"column"} 
        position={"relative"}
        gap={2}
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
          w={{ base: "100%", md: "20%" }} 
          mt={{ base: 4, md: 0 }} 
          position={{ base: "static", md: "absolute" }} 
          right={0} 
          bg={colors.yellow} 
          color={colors.blue} 
          border={`1px solid ${colors.blue}`}
          onClick={() => setCardVoteIsVisible(true)} // Abre o CardVote
        >
          vote
        </Button>
        
        {cardVoteIsVisible && (
          <CardVote closeModal={closeModalVote} />
        )}
      </Flex>
    </Flex>
  );
}
