import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom";
  
  const IMAGE =
    'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000';
  
  export default function AdminHotelCard({id, city, heading, img1,text1, price1,price2,rating, review, no_of_reviews }) {


    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
            
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                <Box style={{margin:"auto",padding:"0.2rem 0"}}>
            <Text>{city}</Text>
          </Box>
            <Image
              rounded={'lg'}
              height={180}
              width={250}
              objectFit={'cover'}
              src={img1}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
              {heading}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {text1}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xm'}>
                {price1}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {price2}
              </Text>
            </Stack>
          </Stack>
          <Box style={{display:"flex", justifyContent:"space-around", marginTop:"20px",marginBottom:"-15px"}}>
          <Text>Total Reviews</Text>
            <Text>Rating</Text>
            <Text>Review</Text>
          </Box>
          <Box style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
          <Text>{no_of_reviews}</Text>
            <Text>{rating}</Text>
            <Text>{review}</Text>
          </Box>
          
          <Box style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
          <Button>Delete</Button>
          <RouterLink to={`/updatedata/${id}`}><Button>Edit</Button></RouterLink>
          </Box>
        </Box>
      </Center>
    );
  }