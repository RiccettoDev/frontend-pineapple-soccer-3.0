import { Flex, Img } from "@chakra-ui/react";

import banner from "../../assets/banner.jpg"

export default function Home() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} zIndex={100}>
      <Img src={banner.src} alt="banner" w={"100vw"} h={"100vh"} opacity={"75%"} />
    </Flex>
  );
}
