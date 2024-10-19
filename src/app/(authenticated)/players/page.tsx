"use client";  // Isso transforma o componente em um Client Component

import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

import api from "../../../services/api"
import { CardPlayer } from "@/components/players/cardPlayer";

import { colors } from "@/styles/colors";

// Defina uma interface para o tipo de usuário
interface User {
    id: number;
    name: string;
}

export default function Players() {
    const [users, setUsers] = useState<User[]>([]); // Inicializado como um array vazio do tipo User

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/user");
                setUsers(response.data);
            } catch (error) {
                console.log("Erro ao buscar usuários: ", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <Flex 
            bg={"blue"} 
            w={"100%"} 
            h={"100%"} 
            justifyContent={"center"}
            color={colors.white}>
            <Flex direction={"column"} mt={36} mb={16}>
                <Text fontSize={"2xl"} mb={4}>Jogadores</Text>
                {users.length > 0 ? (
                    users.map((user) => (
                        <CardPlayer key={user.id} user={user} />
                    ))
                ) : (
                    <Text>Carregando...</Text>
                )}
            </Flex>    
        </Flex>
    )
}