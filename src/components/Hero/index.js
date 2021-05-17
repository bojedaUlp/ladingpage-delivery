import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn, HeroP } from './HeroElements'

const Hero = () => {

const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
    setIsOpen(!isOpen)
}

return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
            <HeroItems>
                <HeroH1>Lorem Ipsum Ready </HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>

)
}

export default Hero
