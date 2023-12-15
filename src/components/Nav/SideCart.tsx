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
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark,
  LinkBox, LinkOverlay
} from '@chakra-ui/react'

import { ProductCardCart } from '../Cards/ProductCards';

import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RiLockLine } from "react-icons/ri";

function SideCart(props: any) {
  const context = React.useContext<any>(AppContext)
  
  const parsedTotal = Number(context.cartAmount.replace(/[^0-9.-]+/g,""))
  const percentage = (100 * parsedTotal) / 340 >= 100 ? 100 : (100 * parsedTotal) / 340

  return (
      <Drawer
        isOpen={props.cartOpen}
        placement='right'
        size='sm'
        isFullHeight
        onClose={props.setCartOpen}
      >
        <DrawerOverlay />
        <DrawerContent h='100%' >
          <DrawerCloseButton size='lg' color='gray.500' top='15px' right='15px' />
          <DrawerHeader as='h1' h='66px' fontFamily='Roboto' fontSize='26px' fontWeight='400' >DEIN WARENKORB</DrawerHeader>

          <DrawerBody px='0' overflow='hidden'>
            <Flex h='90px' px='6' py='4' bg='gray.100' flexDir='column' align='center' >
              <Flex align='center' mb='4'>
                <Icon as={FaTruck} mr='3' />
                <Heading as='h5' fontSize='18px' fontWeight='600' color='black' >
                  {percentage >= 100 
                  ? <>Kostenloser Versand freigeschaltet!</>
                  : <>Fügen<Text as='span' color='gray.500' fontWeight='400'> Sie {Math.floor(340 - parsedTotal)}€ hinzu gür </Text>GRATIS Versand
                    </>
                  }
                </Heading>              </Flex>
              <Slider aria-label='amount-slider' value={percentage} pointerEvents='none' >
                <SliderTrack bg='gray.200' h='18px' borderRadius='full' >
                  <SliderFilledTrack bg='black' borderRadius='full'/>
                </SliderTrack>
                <SliderThumb boxSize={0} h='18px' style={percentage >= 100 ? {border: 'none'} : {background: 'transparent', height: '18px', borderRadius: '0 99px 99px 0', boxShadow: 'none'}}>
                  {percentage >= 100 
                  ? <Icon bg='black' as={FaCheck} color='white' h='7' w='7' borderRadius='full' borderColor='white' borderWidth='3px' mr='6' p='1.5px' ></Icon>
                  : <Text as='span' color='white' fontSize='11px' zIndex={999} fontWeight='700' mr='9' mb='0.5px' >{percentage >= 100 ? '' : `${Math.floor(percentage)}%`}</Text>}
                </SliderThumb>
              </Slider>
            </Flex>
            <Box h='100%' px='6' overflowY='scroll'>
              {context?.cart?.products?.map((item: any, idx: number) => (
                <ProductCardCart product={item} idx={idx} key={idx}/>
              ))}

            </Box>
          </DrawerBody>

          <DrawerFooter px='0' textAlign='center' display='block' >
            <Flex w='100%' h='110px' mb='6' gap='1' justify='space-between' >
              <Center w={[1/3]} h='100%' bg='gray.100' flexDir='column' >
                <StaticImage src='../../assets/icons/truck.svg' alt='applePay' width={40} placeholder="blurred" />
                <Text as='p' fontSize='17px' fontWeight='600' lineHeight='20px' mt='2' >Free</Text>
                <Text as='p' fontSize='16px' fontWeight='400' lineHeight='20px'  color='gray.500' >Shipping Today</Text>
              </Center>
              <Center w={[1/3]} h='100%' bg='gray.100' flexDir='column' >
                <StaticImage src='../../assets/icons/delivery.svg' alt='applePay' width={40} placeholder="blurred" />
                <Text as='p' fontSize='17px' fontWeight='600' lineHeight='20px' mt='2' >35-Day</Text>
                <Text as='p' fontSize='16px' fontWeight='400' lineHeight='20px'  color='gray.500' >Easy Returns</Text>
              </Center>
              <Center w={[1/3]} h='100%' bg='gray.100' flexDir='column' >
                <StaticImage src='../../assets/icons/chat.svg' alt='applePay' width={40} placeholder="blurred" />
                <Text as='p' fontSize='17px' fontWeight='600' lineHeight='20px' mt='2' >24/7</Text>
                <Text as='p' fontSize='16px' fontWeight='400' lineHeight='20px'  color='gray.500' >Customer Support</Text>
              </Center>
            </Flex>
            <Box px='6' mb='5' >
              <Flex w='100%' justify='space-between' mb='2'>
                <Text as='p' w={['70%']} textAlign='left' fontSize='18px' fontWeight='500' >Zwischensumme</Text>
                <Text as='p' w={['40%']} textAlign='right' fontSize='18px' fontWeight='600' >{context.cartAmount} EUR</Text>
              </Flex>
              {percentage >= 100 && <Flex w='100%' justify='space-between'>
                <Text as='p' w={['70%']} textAlign='left' fontSize='18px' fontWeight='500' >Versand</Text>
                <Text as='p' w={['30%']} textAlign='right' fontSize='18px' fontWeight='600' color='#9B846D' >KOSTENLOS</Text>
              </Flex>}
            </Box>
            <Box px='6' mb='5'>
              <Button size='lg' w='100%' py='8' fontWeight='700' bg='black' colorScheme='blackAlpha' borderRadius='0' leftIcon={<Icon as={RiLockLine} />}
                onClick={() => navigate('#')}
              >AUSCHECKEN</Button>
            </Box>

            <Flex w='100%' px='6' mb='5' gap='4' justify='space-between'>
              <LinkBox as='div' w={[1/6]} >
                <LinkOverlay as={Link} href='#'>
                  <Center h='40px' borderRadius='6px' borderWidth='3px' borderColor='text.100'>
                    <StaticImage src='../../assets/logos/applePay.svg' alt='applePay' width={40} placeholder="blurred" />
                  </Center>
                </LinkOverlay>
              </LinkBox>
              <LinkBox as='div' w={[1/6]} >
                <LinkOverlay as={Link} href='#'>
                  <Center h='40px' borderRadius='6px' borderWidth='3px' borderColor='text.100'>
                    <StaticImage src='../../assets/logos/googlePay.svg' alt='googlePay' width={40} placeholder="blurred" />
                  </Center>
                </LinkOverlay>
              </LinkBox>
              <LinkBox as='div' w={[1/6]} >
                <LinkOverlay as={Link} href='#'>
                  <Center h='40px' borderRadius='6px' borderWidth='3px' borderColor='text.100'>
                    <StaticImage src='../../assets/logos/visa.svg' alt='visa' width={40} placeholder="blurred" />
                  </Center>
                </LinkOverlay>
              </LinkBox>
              <LinkBox as='div' w={[1/6]} >
                <LinkOverlay as={Link} href='#'>
                  <Center h='40px' borderRadius='6px' borderWidth='3px' borderColor='text.100'>
                    <StaticImage src='../../assets/logos/masterCard.svg' alt='masterCard' width={40} placeholder="blurred" />
                  </Center>
                </LinkOverlay>
              </LinkBox>
              <LinkBox as='div' w={[1/6]} >
                <LinkOverlay as={Link} href='#'>
                  <Center h='40px' borderRadius='6px' borderWidth='3px' borderColor='text.100'>
                    <StaticImage src='../../assets/logos/payPal.svg' alt='payPal' width={20} placeholder="blurred" />
                  </Center>
                </LinkOverlay>
              </LinkBox>
              <LinkBox as='div' w={[1/6]} >
                <LinkOverlay as={Link} href='#'>
                  <Center h='40px' borderRadius='6px' borderWidth='3px' borderColor='#5A31F4' bg='#5A31F4'>
                    <StaticImage src='../../assets/logos/shopPay.svg' alt='shopPay' width={42} placeholder="blurred" />
                  </Center>
                </LinkOverlay>
              </LinkBox>
            </Flex>
            
            <Box>
              <Text as='p' fontSize='18px' fontWeight='600' color='gray.500'>100% SSL-Secure Checkout</Text>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default SideCart