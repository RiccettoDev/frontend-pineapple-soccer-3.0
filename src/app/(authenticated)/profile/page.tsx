import { Flex } from "@chakra-ui/react";
import { CardProfile } from "@/components/profile/cardProfile";

import { colors } from "@/styles/colors";

export default function Profile() {
    return (
        <Flex bg={colors.yellow} w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"} color={colors.white}>
            <CardProfile />
        </Flex>
    )
}