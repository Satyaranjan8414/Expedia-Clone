import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon, InfoIcon } from '@chakra-ui/icons';

  export default function Cards({title,time,unit,details}) {
    return (
      <Center py={4}>
        <Box
          maxW={'200px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={400}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              {title}
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'2xl'} fontWeight={600} color={"black"}>
                {time}
              </Text>
              <Text color={'gray.500'}>{unit}</Text>
            </Stack>
          </Stack>
  
          <Box  px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={InfoIcon} color="green.400" />
                {details}
              </ListItem>
              {/* <ListItem>
                <MainDrawer/>
              </ListItem> */}
            </List>
          </Box>
        </Box>
      </Center>
    );
  }