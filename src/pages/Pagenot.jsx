import React from 'react'
import { Image } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar/Navbar'

const Pagenot = () => {
    return (
        <div>
            <Navbar type="list"/>
            <ol style={{backgroundColor:"red" } } >
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
            </ol>
            <Image s='auto' w='100%' h="500px"  src='https://miro.medium.com/max/720/1*zBFBJktPD3_z0S_35kO5Hg.gif' />
        </div>
    )
}

export default Pagenot
