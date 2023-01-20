
import React, { useState } from "react";


import {

  Center,
  Flex,

  Stack,
  
  useColorModeValue,

} from '@chakra-ui/react';
import CardCarousel from "./CardCarousel";



export default function Card({hotel}) {
  
  return (
    <Center py={2}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        border="1px solid red"
        w={{ sm: '100%', md: '99%' }}
        height={{ sm: '276px', md: '14rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={1}>
        <Flex flex={1} height="200px" wid bg="blue.200" borderRadius={'10px'}>
        <CardCarousel prop={hotel}/>
         
        </Flex>
        <Stack
        width="250%"
        border="1px solid red"
        >
        <h1>heading</h1>
        </Stack>
       
         
         

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button> */}
            </Stack>
      </Stack>
    </Center>
  );
}




