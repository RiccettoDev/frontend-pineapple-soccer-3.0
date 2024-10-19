import NextLink from 'next/link';
import { Box, Flex, Img, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { colors } from "../../../styles/colors"

import logo from "../../../assets/pineappleIcon.png"

export function Header() {
    return (
        <Flex
            bg={colors.blue}
            color={colors.lime}
            width={"100%"}
            h={"130px"}
            align={"center"}
            justifyContent={"space-between"}
            pl={"5%"}
            pr={"5%"}
            boxShadow={"2xl"}
            position={"fixed"}
            top={0}
            zIndex={200}
            borderBottomLeftRadius={"70px"}
            borderBottomRightRadius={"70px"}
        >
            <Flex
                alignItems={"center"}
                transition="all 0.3s ease"  // Adiciona transição suave
                _hover={{
                    transform: "scale(1.1)",  // Aumenta o tamanho com scale
                }}
            >
                <Img src={logo.src} alt="logo" />
                <Text fontSize={"3xl"} mt={6} _hover={{ color: `${colors.white}` }}>PineappleSoccer</Text>
            </Flex>
            <Box>
                <UnorderedList display={"flex"} gap={"20px"} listStyleType={"none"} fontSize={"2xl"}>
                    <ListItem
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)",
                        }}
                    >
                        <Link
                            as={NextLink} // Isso vai usar o Next.js Link dentro do Chakra Link
                            href="/"
                            transition="all 0.3s ease"
                            _hover={{
                                textDecoration: "none", color: `${colors.white}`,
                            }}
                        >
                            Home
                        </Link>
                    </ListItem>
                    <ListItem
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)",
                        }}
                    >
                        <Link
                            as={NextLink} // Isso vai usar o Next.js Link dentro do Chakra Link
                            href="/profile"
                            transition="all 0.3s ease"
                            _hover={{
                                textDecoration: "none", color: `${colors.white}`,
                            }}
                        >
                            Perfil
                        </Link>
                    </ListItem>
                    <ListItem
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)",
                        }}
                    >
                        <Link
                            as={NextLink} // Isso vai usar o Next.js Link dentro do Chakra Link
                            href="/players"
                            transition="all 0.3s ease"
                            _hover={{
                                textDecoration: "none", color: `${colors.white}`,
                            }}
                        >
                            Jogadores
                        </Link>
                    </ListItem>
                    <ListItem
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)",
                        }}
                    >
                        <Link
                            as={NextLink} // Isso vai usar o Next.js Link dentro do Chakra Link
                            href="/matches"
                            transition="all 0.3s ease"
                            _hover={{
                                textDecoration: "none", color: `${colors.white}`,
                            }}
                        >
                            Partidas
                        </Link>
                    </ListItem>

                </UnorderedList>
            </Box>
        </Flex>
    )
}  