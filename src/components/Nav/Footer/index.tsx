import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import { Text, Box, Flex, IconButton, Icon, Select, Stack, InputGroup, InputLeftAddon, Divider, Container,  Link as ChakraLink} from '@chakra-ui/react'

import { AiOutlineGithub, AiOutlineTwitter, AiFillInstagram, AiFillYoutube, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebook, FaFacebookMessenger, FaPhoneAlt, FaPinterest, FaTiktok,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { IoLanguageOutline } from "react-icons/io5";
import { FiPhone } from 'react-icons/fi'

const Foot: any = styled.footer`
  background: ${(p: any) => p.background || p.bg};
`
const Wrapper: any = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -1;
  width: 100%;
  z-index: 999;
  background: ${(p: any) => p.background || p.bg};
`

const Footer = () => {
  const sitemap: Array<any> = [
    { name: 'Home', link: '/', subItems: [
      {name: 'Blog', link: '/',},
      {name: 'Contact', link: '/',},
      {name: 'Track Order', link: '/',},
      {name: 'FAQs', link: '/',},
    ] },
    { name: 'Shop', link: '/', subItems: [
      {name: 'Men', link: '/',},
      {name: 'Women', link: '/',},
      {name: 'Kids', link: '/',},
    ] },
    { name: 'Categories', link: '/', subItems: [
      {name: 'T-Shirts', link: '/',},
      {name: 'Jeans', link: '/',},
      {name: 'Shoes', link: '/',},
      {name: 'Underwear', link: '/',},
      {name: 'Accessories', link: '/',},
    ] },
  ]

  return (
    <Foot>
      <Wrapper>
        <Container px={[5,5,10,20,20]} py={[8]} maxW={['2xl','2xl','4xl','6xl','7xl','7xl','8xl']} >
          <Divider border='1px solid' mt='2' mb='3' borderColor='gray.200'/>
          <Flex maxH={['400px','400px','300px','200px','200px']} flexWrap='wrap' justify='space-between' m='0'>
            {sitemap.map((sec: {[key: string]: any}, i: number) => (
              <Box key={i}>
                <Text as='h5' fontWeight='700'>{sec.name}</Text>
                {sec?.subItems?.map((link: {[key: string]: any}, j: number) => (
                  <ChakraLink as={Link} to='' pl='2' display='block' key={j}>{link.name}</ChakraLink>
                ))}
              </Box>
            ))}
            <Box>
              <Text as='h5' fontWeight='700'>CONTACT US</Text>
                <ChakraLink as={Link} to='' display='flex' alignItems='center'> <Icon as={FaPhoneAlt} mr='3'/>+1 (00) 12 345 678 </ChakraLink> 
                <ChakraLink as={Link} to='' display='flex' alignItems='center'> <Icon as={HiMail} mr='3'/>email@example.com </ChakraLink> 
                <ChakraLink as={Link} to='' display='flex' alignItems='center'> <Icon as={HiLocationMarker} mr='3'/>Av Place 300, Somewhere, P. C. 64000 </ChakraLink> 
            </Box>
          </Flex>

          <Divider border='1px solid' mt='2' mb='3' borderColor='gray.200'/>

          <Stack gap='5' direction={['column','column','row','row','row']} align='center' justify='space-between' h={['170px','170px','100px','40px','40px']}>
            <Flex w='100%' gap='3' align='center' justify={['center','center','start','start','start']} flexWrap={'wrap'} >
              <Text as='p'>Contact</Text>
              <Flex w={['100%','100%','auto','auto','auto']} gap='3' align='center' justify={['center','center','start','start','start']}>
                <IconButton as={AiOutlineWhatsApp} aria-label='Media' size='xs' h='21px' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={HiMail} aria-label='Media' size='xs'mr={[0,0,5,5,5]} colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
              </Flex>

              <Text as='p'>Media</Text>
              <Flex w={['100%','100%','auto','auto','auto']} gap='3' align='center' justify={['center','center','start','start','start']}>
                <IconButton as={FaTiktok} aria-label='Media' size='xs' h='18px' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={FaXTwitter} aria-label='Media' size='xs' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={AiFillYoutube} aria-label='Media' size='xs' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={AiFillInstagram} aria-label='Media' size='xs' h='21px' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={AiOutlineGithub} aria-label='Media' size='xs' h='21px' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={FaFacebook} aria-label='Media' size='xs' h='19px' colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
                <IconButton as={FaPinterest} aria-label='Media' size='xs' h='19px' mr={[0,0,0,0,5]} colorScheme='white' fill='gray' transition='all 0.5s ease-in-out' _hover={{transform: 'scale(1.05)', fill: 'primary'}}/>
              </Flex>
            </Flex>
            <Box w={['250px','320px','300px','400px','400px']}>
              <InputGroup size='sm' >
                <InputLeftAddon> <Icon as={IoLanguageOutline} /> </InputLeftAddon>
                <Select name='language' id='language' placeholder='Language' width='100%'>
                  <option value='es' defaultChecked>Español</option>
                  <option value='en' >English</option>
                </Select>
              </InputGroup>
            </Box>
          </Stack>
        </Container>

        <Container p='0' maxW='100%'>
          <Stack bg='gray.100' px={[5,5,10,20,20]} py='3'>
            <Text as='p' fontSize='12px'>© 2023 Shop. All rights reserved. Shop® is a registered brand. <ChakraLink as={Link} to='' fontWeight='700' fontSize='12px' >Legally Advice.</ChakraLink></Text>
          </Stack>
        </Container>
      </Wrapper>
    </Foot>
  )
}

export default Footer