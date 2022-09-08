import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box, Flex, typography, Image,Heading, Text, HStack, Spacer, VStack } from "@chakra-ui/react";
import { Card, Typography } from '@mui/material';


const Landing: NextPage = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Image src="/background.png" position='absolute' />
        <VStack position='absolute' align= 'left' pl={130} pt={250}>
          <Heading 
          font-family= 'Poppins' font-style= 'normal' font-weight= '700' size='2xl'
          line-height= '142px' color= '#FFFFFF'>
            Grand Cheese Race
          </Heading>
          <Heading  width={710} pt={2}
          font-family= 'Poppins' font-style= 'normal' font-weight= '700' size='lg'
          line-height= '54px' color= '#FFFFFF'>
          It’s the race of the century! All victors return for one final race... who do you think will win?
          </Heading>
          </VStack>
        </Box>
    </>
  );
};

export default Landing;
