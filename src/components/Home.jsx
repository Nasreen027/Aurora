import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import SinglePost from "./SinglePost";
import { CustomHeading } from "../App";
// import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Box>
        <Heading
         p={3}
          borderBottom={"2px solid #e1d6c5"} mb={8} as={"h1"}>
          Posts
          </Heading>
        <SinglePost />
      </Box>
    </>
  );
}

export default Home;
