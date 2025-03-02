import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import SinglePost from "./SinglePost";
import { colors } from "../theme/colors";
// import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Box>
        <Heading
        color={colors.text.primary}
         p={3}
          borderBottom={"2px solid #1E1E1E"} mb={8} as={"h1"}>
          Posts
          </Heading>
        <SinglePost />
      </Box>
    </>
  );
}

export default Home;
