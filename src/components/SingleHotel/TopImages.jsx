
import { Box,  Img,  } from '@chakra-ui/react';
import React from 'react'


const TopImages = () => {

  return (
    <Box w="100%" my="1rem">
      <Box w="100%" h="250px" display="flex">
        <Box w="50%" h="100%" p="0.1rem">
          <Img
            w="100%"
            h="100%"
            src="https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3880000/3877900/3877863/ec49e68e_b.jpg"></Img>
        </Box>
        <Box w="50%" h="100%" display="flex">
          <Box w="50%" h="100%">
            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
                src="https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3880000/3877900/3877863/ec49e68e_b.jpg"></Img>
            </Box>

            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/4000000/3880000/3877900/3877863/0294393b.jpg?impolicy=resizecrop&rw=455&ra=fit"></Img>
            </Box>
          </Box>
          <Box w="50%" h="100%">
            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/4000000/3880000/3877900/3877863/6a162897.jpg?impolicy=resizecrop&rw=455&ra=fit"></Img>
            </Box>

            <Box h="50%" w="100%" p="0.1rem">
              <Img
                w="100%"
                h="100%"
                src="https://images.trvl-media.com/hotels/13000000/12280000/12270500/12270445/0e9dd9b7.jpg?impolicy=resizecrop&rw=598&ra=fit"
              ></Img>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default TopImages;

