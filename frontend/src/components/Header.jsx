import { Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/Xonaxh.png";

function Header() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="1"
      py={5}
      bg="gray.300"
    >
      <Image src={Logo} alt="Logo" width="100px" />
      {/* <SVG /> */}
      <Text fontSize="xs">The Assurance of Quality</Text>
    </Flex>
  );
}

export default Header;
