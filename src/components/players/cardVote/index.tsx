import { Button, Flex } from "@chakra-ui/react";
import { IoIosCloseCircle } from "react-icons/io";

import { colors } from "@/styles/colors";

interface PLayerCardProps {
  closeModal: () => void;
}

export function CardVote({closeModal}: PLayerCardProps) {
  return (
    <>
      <Flex 
        bg={colors.blue} 
        position={"fixed"} 
        justifyContent={"center"} 
        alignItems={"center"} 
        left={"10%"} 
        top={"25%"}
        w={"80%"} 
        h={"70%"}
        borderRadius={"20px"} 
        zIndex={100}
      >
        <Button 
          onClick={closeModal} 
          background={"none"} 
          _hover={{}}
          position={"absolute"}
          top={5}
          right={5}
        >
          <IoIosCloseCircle color={colors.lime} size={25}/>
        </Button>
        vote
      </Flex>
      <Button _hover={{}} _active={{}} onClick={closeModal}
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
  )
}