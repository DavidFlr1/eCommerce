import React from 'react'
import { navigate, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { AppContext } from '../../context/global';

import {
  Box,
  Flex,
  Center,
  Text,
  Heading,
  Button,
  Icon,
  Divider,
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark,
  LinkBox, LinkOverlay, Link as ChakraLink, Img
} from '@chakra-ui/react'

import { ProductCardCart } from '../Cards/ProductCards';

import { RiLockLine } from "react-icons/ri";
import { IoStar } from "react-icons/io5"
import { BiChevronRightCircle } from "react-icons/bi";


function SideMenu(props: any) {
  const context = React.useContext<any>(AppContext)
  
  const parsedTotal = Number(context.cartAmount.replace(/[^0-9.-]+/g,""))
  const percentage = (100 * parsedTotal) / 340 >= 100 ? 100 : (100 * parsedTotal) / 340

  const items = [
    {name: 'APPLE WATCH STRAPS', link: '#', imgURL: 'images/straps.png'},
    {name: 'WATCH COVERS', link: '#', imgURL: 'images/watches_1.png'},
    {name: 'JEWELRY SETS', link: '#', imgURL: 'images/jwelery.png'},
    {name: 'NEW RELEASES', link: '#', imgURL: 'images/watches_2.png'}
  ]

  return (
    <Drawer
        isOpen={props.menuOpen}
        placement='left'
        size='sm'
        isFullHeight
        onClose={props.setMenuOpen}
    >
      <DrawerOverlay />
      <DrawerContent h='100%' >
        <DrawerCloseButton size='lg' color='gray.700' top='15px' right='15px' />
        <DrawerHeader as='h1' h='66px' fontFamily='Roboto' fontSize='26px' fontWeight='400' >MENU</DrawerHeader>

        <DrawerBody px='0' overflow='hidden'>
          <Flex overflow='hidden' position='relative' _hover={{img: {transform: 'scale(1.1)'}}}>
            <Img src='images/background_1.png' alt='background_1' w='100%' transition='all 0.5s ease-in-out'/>
            <Center flexDir='column' position='absolute' w='100%' h='100%' top='0' left='0'>
              <Heading fontSize='32px' as='h2' color='white' mb='2' fontWeight='400' fontFamily='Roboto' >BUY 1 GET 1 FREE</Heading>
              <Text as='p' color='white' textAlign='center' fontSize='15px' mb='2'>Rated 4.9/5 by + 30,000 customers</Text>
              <Flex w='100%' justify='center'>
                <Icon as={IoStar} fontSize='18px' mx='1px' color='#FFC83D' />
                <Icon as={IoStar} fontSize='18px' mx='1px' color='#FFC83D' />
                <Icon as={IoStar} fontSize='18px' mx='1px' color='#FFC83D' />
                <Icon as={IoStar} fontSize='18px' mx='1px' color='#FFC83D' />
                <Icon as={IoStar} fontSize='18px' mx='1px' color='#FFC83D' />
              </Flex>
            </Center>
          </Flex>
          <Box px='4' overflowY='scroll'>
            {items.map((item, idx) => (
              <Box key={idx}>
                <LinkBox display='flex' my='5' justifyContent='space-between'>
                  <Flex>
                    <Box >
                      <Center w='76px' h='75px' mx='2' borderWidth='1px' borderColor={'gray.200'} borderRadius='6px' >
                        <Box w='64px' h='64px'><Img src={item.imgURL} alt='background_1' w='100%'  /></Box>
                      </Center>
                    </Box>
                    <Flex align='center'> <LinkOverlay as={Link} href={item.link}><Text fontSize='19px' as='h4' fontWeight='500' textAlign='left' fontFamily='Roboto' >{item.name}</Text></LinkOverlay> </Flex>
                  </Flex>
                  <Flex align='center'> <Icon as={BiChevronRightCircle} fontSize='24px' /> </Flex>
                </LinkBox>
                <Divider borderWidth='2px' borderColor='gray.300' />
              </Box>
            ))}
          </Box>
        </DrawerBody>

        <DrawerFooter px='0' textAlign='center' display='block' >
          <Box px='6' mb='3' >
            <Flex w='100%' justify='space-between' mb='2'>
              <ChakraLink as={Link} href='#' w={['70%']} textAlign='left' fontSize='18px' >FAQs</ChakraLink>
              <ChakraLink as={Link} href='#' w={['70%']} textAlign='right' fontSize='18px' >Contact Us</ChakraLink>
            </Flex>
            <Flex w='100%' justify='space-between'>
              <ChakraLink as={Link} href='#' w={['70%']} textAlign='left' fontSize='18px' >Track Your Order</ChakraLink>
              <ChakraLink as={Link} href='#' w={['70%']} textAlign='right' fontSize='18px' >Resize Straps</ChakraLink>
            </Flex>
          </Box>
          <Flex w='100%' h='130px' mb='6' gap='1' justify='space-between' >
            <Center w={[1/3]} h='100%' bg='#FAF8F2' flexDir='column' >
              <Center w='52px' h='52px' p='2' borderWidth='1px' borderColor={'gray.200'} borderRadius='full' >
                <Box w='auto' h='auto' ><StaticImage src='../../assets/icons/check_black.svg' alt='check_black' width={40} placeholder="blurred" /></Box>
              </Center>
              <Text as='p' fontSize='16px' fontWeight='600' lineHeight='20px' mt='3' >Fits all Apple Watch models</Text>
            </Center>
            <Center w={[1/3]} h='100%' bg='#FAF8F2' flexDir='column' >
              <Center w='52px' h='52px' p='2' borderWidth='1px' borderColor={'gray.200'} borderRadius='full' >
                <Box w='auto' h='auto' ><StaticImage src='../../assets/icons/money_black.svg' alt='money_black' width={40} placeholder="blurred" /></Box>
              </Center>
              <Text as='p' fontSize='16px' fontWeight='600' lineHeight='20px' mt='3' >Money-Back  Guarantee</Text>
            </Center>
            <Center w={[1/3]} h='100%' bg='#FAF8F2' flexDir='column' >
              <Center w='52px' h='52px' p='2' borderWidth='1px' borderColor={'gray.200'} borderRadius='full' >
                <Box w='auto' h='auto' ><StaticImage src='../../assets/icons/star_black.svg' alt='star_black' width={40} placeholder="blurred" /></Box>
              </Center>
              <Text as='p' fontSize='16px' fontWeight='600' lineHeight='20px' mt='3' >+30,000 Happy Customers</Text>
            </Center>
          </Flex>

          <Box px='6' mb='5'>
            <Button size='lg' w='100%' py='8' fontWeight='700' bg='black' colorScheme='blackAlpha' borderRadius='0' onClick={() => navigate('#')}>SHOPP ALL PRODUCTS</Button>
          </Box>
          
          <Box>
            <Text as='p' fontSize='18px' fontWeight='600' >FREE SHIPPING ON ORDERS +$45.00</Text>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SideMenu