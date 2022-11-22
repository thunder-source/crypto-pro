import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      p={"4"}
      shadow={"base"}
      bgColor={"purple.900"}
    >
      <div>
        <Button
          onClick={() => {
            signOut(auth)
              .then(() => {
                window.location.replace("/");
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
          }}
          colorScheme="purple"
        >
          LogOut
        </Button>
      </div>
      <div>
        <Button variant={"unstyled"} pr={5} color={"white"}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} pr={5} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </div>
    </HStack>
  );
};

export default Header;
