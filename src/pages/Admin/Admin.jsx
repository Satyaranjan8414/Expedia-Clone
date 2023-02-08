import React, { ReactNode, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
  Stack,
  useColorMode,
  Button,
  GridItem,
  Grid,
  Heading
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Cards from '../../components/Cards';
import BarGraph from './Graph/BarGraph';
import {Link as RouterLink, useNavigate} from "react-router-dom";
import { getLocalData } from '../../utils/accessLocalStorage';




const LinkItems = [
  { name: <RouterLink to="/dashboard">Dashboard</RouterLink>, icon: FiHome },
  { name: <RouterLink to="/hoteldata">Tables</RouterLink>, icon: FiTrendingUp },
  { name: 'Billing', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Profile', icon: FiSettings },
  { name: 'Setting', icon: FiSettings },
];


export default function Admin({
    children,
  }) {

  

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  
  return (
    <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [state, setState] = useState(getLocalData("AdminEmail")||{})
  let navigate=useNavigate();
  // console.log(state.userName)

  const handleRedirect=()=>{
    navigate("/signinadmin")
  }

  return (
    <>
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
        <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/112657812?v=4'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{state.userName}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleRedirect}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
    <Grid
    templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",xl:"repeat(3, 1fr)","2xl":"repeat(4, 1fr)"}} gap={10}
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    backgroundRepeat="none"
    >{
        data?.map((el)=>{
            return(
                <GridItem key={el.title}>
                    {<Cards
                    title={el.title}
                    time={el.time}
                    unit={el.unit}
                    details={el.details}
                    />}
                </GridItem>
            )
        })
    }
    </Grid>
    <Box style={{width:"50%", height:"300px", border:"1px solid gray", borderRadius:"10px", margin:"auto", marginTop:"50px"}}
     ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    backgroundRepeat="none">
      <Heading style={{margin:"auto", width:"50%"}}>Trending Hotels Data</Heading>
      <BarGraph data={newData}/>
    </Box>
    </>
  );
};

const data=[
  {title:"Email Sent",time:"12,360",unit:"",details:"MORE DETAILS",icon:""},
  {title:"Sales Obtained",time:"431,225",unit:"",details:"MORE DETAILS"},
  {title:"New Clients",time:"32,441",unit:"",details:"MORE DETAILS"},
  {title:"Traffic Received",time:"1,324,456",unit:"",details:"MORE DETAILS"},
  {title:"Hotels",time:"10,360",unit:"",details:"MORE DETAILS",icon:""},
  {title:"Flights",time:"25,000",unit:"",details:"MORE DETAILS"},
  {title:"Cars",time:"19,441",unit:"",details:"MORE DETAILS"},
  {title:"Recent Booking",time:"1,324,456",unit:"",details:"MORE DETAILS"},
]

// 'Room left',
//             'Hospitality',
//             'Manager',
//             'Staff',
//             'Views',
//             'Rooms'

const newData=[
  {
    "Hotel": "Porch",
    "Room left": 74,
    "hot dogColor": "hsl(13, 70%, 50%)",
    "Hospitality": 179,
    "burgerColor": "hsl(78, 70%, 50%)",
    "Manager": 83,
    "sandwichColor": "hsl(312, 70%, 50%)",
    "Staff": 177,
    "kebabColor": "hsl(231, 70%, 50%)",
    "Views": 11,
    "friesColor": "hsl(214, 70%, 50%)",
    "Rooms": 480,
    "donutColor": "hsl(32, 70%, 50%)"
  },
  {
    "Hotel": "Taj",
    "Room left": 78,
    "hot dogColor": "hsl(170, 70%, 50%)",
    "Hospitality": 145,
    "burgerColor": "hsl(22, 70%, 50%)",
    "Manager": 121,
    "sandwichColor": "hsl(141, 70%, 50%)",
    "Staff": 95,
    "kebabColor": "hsl(108, 70%, 50%)",
    "Views": 34,
    "friesColor": "hsl(339, 70%, 50%)",
    "Rooms": 390,
    "donutColor": "hsl(148, 70%, 50%)"
  },
  {
    "Hotel": "Oberoi",
    "Room left": 77,
    "hot dogColor": "hsl(243, 70%, 50%)",
    "Hospitality": 137,
    "burgerColor": "hsl(221, 70%, 50%)",
    "Manager": 7,
    "sandwichColor": "hsl(330, 70%, 50%)",
    "Staff": 42,
    "kebabColor": "hsl(15, 70%, 50%)",
    "Views": 95,
    "friesColor": "hsl(317, 70%, 50%)",
    "Rooms": 580,
    "donutColor": "hsl(321, 70%, 50%)"
  },
  {
    "Hotel": "Ryan",
    "Room left": 43,
    "hot dogColor": "hsl(213, 70%, 50%)",
    "Hospitality": 12,
    "burgerColor": "hsl(225, 70%, 50%)",
    "Manager": 12,
    "sandwichColor": "hsl(39, 70%, 50%)",
    "Staff": 122,
    "kebabColor": "hsl(39, 70%, 50%)",
    "Views": 158,
    "friesColor": "hsl(297, 70%, 50%)",
    "Rooms": 450,
    "donutColor": "hsl(67, 70%, 50%)"
  },
  {
    "Hotel": "Royal",
    "Room left": 56,
    "hot dogColor": "hsl(58, 70%, 50%)",
    "Hospitality": 102,
    "burgerColor": "hsl(161, 70%, 50%)",
    "Manager": 172,
    "sandwichColor": "hsl(46, 70%, 50%)",
    "Staff": 13,
    "kebabColor": "hsl(307, 70%, 50%)",
    "Views": 149,
    "friesColor": "hsl(350, 70%, 50%)",
    "Rooms": 660,
    "donutColor": "hsl(65, 70%, 50%)"
  },
  {
    "Hotel": "Al-jan",
    "Room left": 81,
    "hot dogColor": "hsl(184, 70%, 50%)",
    "Hospitality": 143,
    "burgerColor": "hsl(228, 70%, 50%)",
    "Manager": 120,
    "sandwichColor": "hsl(108, 70%, 50%)",
    "Staff": 38,
    "kebabColor": "hsl(112, 70%, 50%)",
    "Views": 193,
    "friesColor": "hsl(24, 70%, 50%)",
    "Rooms": 500,
    "donutColor": "hsl(299, 70%, 50%)"
  },
  {
    "Hotel": "Classic",
    "Room left": 12,
    "hot dogColor": "hsl(314, 70%, 50%)",
    "Hospitality": 39,
    "burgerColor": "hsl(10, 70%, 50%)",
    "Manager": 166,
    "sandwichColor": "hsl(150, 70%, 50%)",
    "Staff": 116,
    "kebabColor": "hsl(134, 70%, 50%)",
    "Views": 134,
    "friesColor": "hsl(152, 70%, 50%)",
    "Rooms": 250,
    "donutColor": "hsl(287, 70%, 50%)"
  }
]