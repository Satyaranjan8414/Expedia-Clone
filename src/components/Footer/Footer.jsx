import {
    Container,
    Box,
    Image,
    Center,
    Text,
    Stack,
    Heading,
    Flex,
    Spacer,
  } from "@chakra-ui/react";
 

  function Footer() {
    const hoverColor = "#3182ce";
  
    const MenuItem = ({ name }) => {
      return (
        <Text fontSize="xs" textAlign={"left"} _hover={{ color: hoverColor }}>
          {name}
        </Text>
      );
    };
    return (
      <Container maxW="container.xl">
        <Box mt="50" mb="50" p="1">
          <Flex flexWrap="wrap">
            <Box>
              <Image
                w="80px"
                h="80px"
                borderRadius="50%"
                
                alt="Travellia"
              />
            </Box>
            <Spacer />
            <Box mb="50">
              <Stack spacing={3}>
                <Heading as="h6" size="xs" textAlign={"left"}>
                  Company
                </Heading>
                <MenuItem name={"About us"} />
                <MenuItem name={"Jobs"} />
                <MenuItem name={"List your property"} />
                <MenuItem name={"Partnerships"} />
              </Stack>
            </Box>
            <Spacer />
            <Box mb="50">
              <Stack spacing={3}>
                <Heading as="h6" size="xs" textAlign={"left"}>
                  Explore
                </Heading>
                <MenuItem name={"India travel guide"} />
                <MenuItem name={"Hotels in India"} />
                <MenuItem name={"Holiday rentals in India"} />
                <MenuItem name={" Holiday packages in India"} />
                <MenuItem name={"Domestic flights"} />
                <MenuItem name={"Car hire in India"} />
                <MenuItem name={"All accommodation types"} />
                <MenuItem name={"Travel blog"} />
              </Stack>
            </Box>
            <Spacer />
          </Flex>
        </Box>
        <Container
          maxW="container.xl"
          mt="-60px"
          borderTop="1px"
          borderTopColor="#c5c7cc"
        >
          <Box p="5">
            <Center>
              <Image
                w="200px"
                src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png"
              />
            </Center>
            <Text fontSize="xs">
              © 2023 allSeasonHOTELS, Inc., an allSeasonHOTELS Group company, All
              rights reserved. TravelliaHOTELS and the Logo are trademarks or
              registered trademarks of TravelliaHOTELS, Inc.
            </Text>
          </Box>
        </Container>
      </Container>
    );
  }
  
  export default Footer;
  