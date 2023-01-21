import React from 'react'
import { Heading, Box, Input, Button, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateHotel = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const toast = useToast()
const navigate = useNavigate()
    const handleSubmit = () => {
        let obj = {
            name,
            location,
            price,
            rating,
            description
        }
        axios
            .post(`https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan/${location}`, obj)
            .then(() => {
                toast({
                    title: `Hotel Created Successfully!!`,
                    status: "success",
                    duration: 1000,
                    position: "top",
                    isClosable: true,
                  })
                  console.log(location)
                  navigate('/')
            }).catch(() => {
                alert("Page Not Found")
            })
    }

    return (
        <div style={{ display: 'flex' }}>
            <Box w='400px' fontSize='15px' margin='auto' >
                <Heading marginBottom='20px'>
                    Add Hotel
                </Heading>
                <Input m='15px' onChange={(e) => setName(e.target.value)} placeholder='Hotel Name ' />
                <Input m='15px' onChange={(e) => setLocation(e.target.value)} placeholder=' Hotel Location' />
                <Input m='15px' onChange={(e) => setPrice(e.target.value)} placeholder='Hotel Price ' />
                <Input m='15px' onChange={(e) => setRating(e.target.value)} placeholder='Hotel Rating' />
                <Input m='15px' onChange={(e) => setDescription(e.target.value)} placeholder='Hotel Description' />
                <Button onClick={handleSubmit} marginTop='10px' w='415px' color='white' colorScheme='blue' isDisabled = {
            name===""||
            location===""||
            price===""||
            rating===""||
            description===""
        } >Submit</Button>
            </Box>
        </div>
    )
}

export default CreateHotel
