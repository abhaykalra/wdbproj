import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import VoteCard from "../components/vote-card";

const Voting: NextPage = () => {
  return <>
  <NavBar />
  <Flex justify = 'center' px={100} paddingLeft = {500} py={20} width= '1108px' height='244px'>
    <VoteCard image='runner1.jpg' name="Speedy Sidrimo"/>
    <VoteCard image='runner4.jpeg' name="Muscular Macy"/>
    </Flex>
  <Flex justify = 'center' px={100} paddingLeft = {500} py='65px' width= '1108px' height='244px'> 
    <VoteCard image='runner3.jpeg' name="Agile Aspen"/>
    <VoteCard image='runner2.jpeg' name="Fast-roller Fardan"/>
  </Flex>
  </>;
};

export default Voting;


