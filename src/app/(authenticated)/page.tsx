"use client"; // Certifique-se de marcar como Client Component

import { Flex, Img, Text } from "@chakra-ui/react";
import banner from "../../assets/banner.jpg";
import { useEffect, useState } from "react";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Supondo que você armazene o nome do usuário no localStorage
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} zIndex={100}>
      <Img src={banner.src} alt="banner" w={"100vw"} h={"100vh"} opacity={"75%"} />
      {username && (
        <Text position="absolute" color="white" fontSize="2xl">
          Bem-vindo, {username}!
        </Text>
      )}
    </Flex>
  );
}

export default Home;
