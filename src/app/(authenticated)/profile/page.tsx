import { Flex } from "@chakra-ui/react";

import { colors } from "@/styles/colors";

export default function Profile() {
    return (
        <Flex bg={"blue"} w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"} color={colors.white}>
            Perfil
        </Flex>
    )
}