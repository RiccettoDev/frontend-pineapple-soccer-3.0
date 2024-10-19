"use client";

import { useState } from 'react';
import { Box, Flex, Img, Link, ListItem, Text, UnorderedList, IconButton, Button } from "@chakra-ui/react";
import NextLink from 'next/link';
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

import { colors } from "../../../styles/colors"

import logo from "../../../assets/pineappleIcon.png"

export function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false); // Inicialmente fechado

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
                transition="all 0.3s ease"
                _hover={{
                    transform: "scale(1.1)",
                }}
            >
                <Img src={logo.src} alt="logo" />
                {/* Exibe o texto somente em telas grandes */}
                <Text 
                    fontSize={"3xl"} 
                    mt={6} 
                    _hover={{ color: `${colors.white}` }} 
                    display={{ base: "none", lg: "block" }} // Esconde o texto em telas pequenas
                >
                    PineappleSoccer
                </Text>
            </Flex>

            {/* Botão para abrir/fechar o menu */}
            <Box display={{ base: "block", lg: "none" }}>
                <IconButton
                    icon={menuIsOpen ? <IoIosCloseCircle /> : <IoMenu />}
                    aria-label="Toggle Menu"
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    bg={colors.lime}
                    color={colors.blue}
                    zIndex={300} // Garante que o botão esteja acima do conteúdo
                />
            </Box>

            {/* Lista de Navegação para Desktop */}
            <Box display={{ base: "none", lg: "block" }}>
                <UnorderedList display={"flex"} gap={"20px"} listStyleType={"none"} fontSize={"2xl"}>
                    <ListItem _hover={{ transform: "scale(1.1)" }}>
                        <Link as={NextLink} href="/" _hover={{ textDecoration: "none", color: `${colors.white}` }}>Home</Link>
                    </ListItem>
                    <ListItem _hover={{ transform: "scale(1.1)" }}>
                        <Link as={NextLink} href="/profile" _hover={{ textDecoration: "none", color: `${colors.white}` }}>Perfil</Link>
                    </ListItem>
                    <ListItem _hover={{ transform: "scale(1.1)" }}>
                        <Link as={NextLink} href="/players" _hover={{ textDecoration: "none", color: `${colors.white}` }}>Jogadores</Link>
                    </ListItem>
                    <ListItem _hover={{ transform: "scale(1.1)" }}>
                        <Link as={NextLink} href="/matches" _hover={{ textDecoration: "none", color: `${colors.white}` }}>Partidas</Link>
                    </ListItem>
                </UnorderedList>
            </Box>

            {/* Menu Colapsável para Mobile */}
            {menuIsOpen && (
                <>
                    <Box
                        position="fixed"
                        top={0} // Coloca o menu no topo
                        right={0}
                        height="100vh" // Altura total da tela
                        width="60%" // Largura do menu colapsável
                        bg={colors.blue}
                        zIndex={100}
                        p={4}
                        display={{ base: "block", lg: "none" }}
                    >
                        <UnorderedList mt={"6em"} listStyleType="none" fontSize="xl">
                            <ListItem _hover={{ transform: "scale(1.1)" }}>
                                <Link as={NextLink} href="/" _hover={{ textDecoration: "none", color: `${colors.white}` }} onClick={() => setMenuIsOpen(false)}>Home</Link>
                            </ListItem>
                            <ListItem _hover={{ transform: "scale(1.1)" }}>
                                <Link as={NextLink} href="/profile" _hover={{ textDecoration: "none", color: `${colors.white}`  }} onClick={() => setMenuIsOpen(false)}>Perfil</Link>
                            </ListItem>
                            <ListItem _hover={{ transform: "scale(1.1)" }}>
                                <Link as={NextLink} href="/players" _hover={{ textDecoration: "none", color: `${colors.white}` }} onClick={() => setMenuIsOpen(false)}>Jogadores</Link>
                            </ListItem>
                            <ListItem _hover={{ transform: "scale(1.1)" }}>
                                <Link as={NextLink} href="/matches" _hover={{ textDecoration: "none", color: `${colors.white}` }} onClick={() => setMenuIsOpen(false)}>Partidas</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Button _hover={{}} _active={{}} onClick={() => setMenuIsOpen(false)}
                         bg={"black"} 
                         w={"100vw"}
                         h={"100vh"}
                         position={'fixed'}
                         zIndex={50}
                         opacity={"60%"}
                         top={0}
                         left={0}
                    />
                </>
                
            )}
        </Flex>
    );
}
