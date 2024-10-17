import { Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Flex w={"100%"} mb={"1em"} bottom={0} position={"absolute"} justifyContent={"center"}>
            <Link
                href="https://portfolio-ten-lime-67.vercel.app/"
                color={"#84CC15"}
                transition="all 0.3s ease"
                _hover={{
                    textDecoration: "none", color: "#FFFFFF",
                }}
                target="_blank" // Abre em uma nova aba
                rel="noopener noreferrer" // Segurança adicional
            >
                <Text
                    transition="all 0.3s ease"
                    _hover={{
                        transform: "scale(1.1)",
                    }}
                >
                    © 2004 - Eduardo Riccetto
                </Text>
            </Link>
        </Flex>
    )
}