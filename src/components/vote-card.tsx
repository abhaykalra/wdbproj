import { Box, Image, Heading, Text, HStack, Spacer, Flex, Button, ButtonGroup, VStack} from "@chakra-ui/react";
import {ChevronDownIcon,ChevronUpIcon} from "@chakra-ui/icons";
import Link from "next/link";
import { Typography, CardContent } from '@mui/material';
import { useState } from "react";
import Head from "next/head";

interface props {
    image: string
    name: string

}
const VoteCard = (props: { image: string | undefined; name:  string | undefined}) => {
    const [score,setscore] = useState(0) 
    const name = props.name

  return (
    
    <Box width={2000} height={400} borderRadius={10} mr={100}>
        <Image src= {props.image} 
            width={300}
            height={144}
            />
        <Box>
            <Flex paddingLeft={1} paddingTop={2} paddingBottom={2} backgroundColor='#F1EDDF' width={300}>
                <VStack align='baseline' width='160px' >
                    
                        <Text font-family= 'Poppins' font-style= 'normal' fontWeight='bold' fontSize='xs' justifyContent='left'>{name} </Text>
                   
                        <Text font-family= 'Poppins' font-style= 'normal' fontSize='xs' justifyContent='left'>Score: {score}</Text>
                 
                </VStack>
                <Spacer />
                <ButtonGroup backgroundColor='#F1EDDF' gap={2} paddingRight={3} paddingTop={1}>
                    <Button size='sm' shadow='md' rounded='2xl' dropShadow='2xl' backgroundColor='#EFDCB6' onClick={() => setscore(score+1)}>
                        <ChevronUpIcon fontSize='4xl' />
                    </Button>
                
                    <Button size='sm' dropShadow='2xl' shadow='md' backgroundColor='#EFDCB6' rounded='2xl' onClick={() => setscore(score-1)}> 
                        <ChevronDownIcon fontSize='4xl'/>
                    </Button>
                </ButtonGroup>
            </Flex>
        </Box>
      </Box>

       

        
                

  );
};

export default VoteCard;
