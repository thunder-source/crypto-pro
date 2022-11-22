import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      // bgColor={"blackAlpha.900"}
      bgColor={"#322659"}
      color={"whiteAlpha.700"}
      minH={"28"}
      px={"16"}
      py={"8"}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-end"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            This is the best crypto tracing web app
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
