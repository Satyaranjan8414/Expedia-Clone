// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Box, HStack } from '@chakra-ui/react';


// const SingleCard = () => {
//   return (
//       <Card
//       margin="auto"
//       width="50%"
//       padding="10px"
//   direction={{ base: 'column', sm: 'row' }}
//   overflow='hidden'
//   variant='outline'
//   >
//   <Image
//     borderLeftRadius="10px"
//     objectFit='cover'
//     maxW={{ base: '100%', sm: '200px' }}
//     src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
//     alt='Caffe Latte'
//   />

//   <HStack style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
//     <Box>
//     <CardBody>
//       <Heading size='md'>heading</Heading>

//       <Text py='2'>
//         small desc
//       </Text>
//       <Text>
//         pool
//       </Text>
//       <Text py='2'>
//        next title
//       </Text>
//       <Text>
//        small desc 
//       </Text>
//       <Text py='2'>
//        Fully refundable
//       </Text>
//       <Text>
//        Reserve now, pay later
//       </Text>
//       <Text py='2'>
//       Rating
//       </Text>
     
//     </CardBody>
//     </Box>
//     <Box>
//       <Button variant='solid' colorScheme='blue'>
//         We have 5 left at
//       </Button>
//       <Text variant='solid'>
//       Rs. 15000
//       </Text>
//       <Text>Total price</Text>
//       <Text>taxes</Text>
//     </Box>
//   </HStack>
// </Card>
//   )
// }




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





