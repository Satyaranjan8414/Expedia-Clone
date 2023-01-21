import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Box, HStack } from '@chakra-ui/react';


const SingleCard = () => {
  return (
      <Card
      margin="auto"
      width="50%"
      padding="10px"
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  >
  <Image
    borderLeftRadius="10px"
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <HStack style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
    <Box>
    <CardBody>
      <Heading size='md'>heading</Heading>

      <Text py='2'>
        small desc
      </Text>
      <Text>
        pool
      </Text>
      <Text py='2'>
       next title
      </Text>
      <Text>
       small desc 
      </Text>
      <Text py='2'>
       Fully refundable
      </Text>
      <Text>
       Reserve now, pay later
      </Text>
      <Text py='2'>
      Rating
      </Text>
     
    </CardBody>
    </Box>
    <Box>
      <Button variant='solid' colorScheme='blue'>
        We have 5 left at
      </Button>
      <Text variant='solid'>
      Rs. 15000
      </Text>
      <Text>Total price</Text>
      <Text>taxes</Text>
    </Box>
  </HStack>
</Card>
  )
}

export default SingleCard