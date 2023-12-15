import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import { 
  Text, Box, Flex, Center, Stack, Icon, IconButton, Button, Show, useDisclosure, Link as ChakraLink,
  Popover, PopoverTrigger, PopoverContent, PopoverBody,
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'

import { BiChevronDown } from 'react-icons/bi'
import { FiExternalLink } from 'react-icons/fi'
import { HiMenu } from 'react-icons/hi'
import { LuMenu } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Head = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  z-index: 999;
`


const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const sitemap: Array<any> = [
    { name: 'Home', link: '/', subItems: [] },
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
    { name: 'Blog', link: '/', subItems: [] },
    { name: 'Contact', link: '/', subItems: [] },
    { name: 'Cart', link: '/', Icon: AiOutlineShoppingCart, function: () => props.setCartOpen(true), subItems: [] },
  ]
  return (
    <Head>
      <Show breakpoint={'(min-width: 732px)'}>
        <Stack direction='row' justify='space-between' h='100%' p='2'>
          <Center w='100px' >
            <IconButton icon={<LuMenu fontSize='25px' />} variant='ghost' onClick={() => props.setMenuOpen(true)} aria-label={`icon-menu`} />
            <Box w='100%'>
              <StaticImage src='../../../assets/logos/Logo.png' alt='logo' />
            </Box>
          </Center>
          <Box w='70%'>
            <Flex align='center' justify='end' gap='2' h='100%' w='100%'>
              {sitemap.map((site: any, i: number) => (
                site.subItems.length > 1
                ? <Box w={1/sitemap.length} borderRadius='10px' transition='all 0.3s ease-in-out' textAlign='center' _hover={{background: 'transparent'}} key={i}>
                    <Popover trigger='hover'>
                      <PopoverTrigger>
                        <Flex align='center' justify='center' _hover={{color: 'primary',svg: {transform: 'rotate(-180deg)', fill: 'primary'}}}>
                          <ChakraLink as={Link} to='' fontWeight='700'>{site.name}</ChakraLink>
                          <Icon as={BiChevronDown} fontSize='20px' transition='all 0.3s ease-in-out'/>
                        </Flex>
                      </PopoverTrigger>

                      <PopoverContent border='none' borderRadius='12px' boxShadow='0 0 10px 0px rgba(0,0,0,0.15) '>
                        <PopoverBody p='2' textAlign='left'>
                          {site.subItems.map((sub: any, j: number) => (
                            <Box p='2' key={j} transition='all 0.3s ease-in-out' _hover={{background: 'gray.100',borderRadius: '10px', h6: {color: 'primary'}}}> 
                              <ChakraLink as={Link} to={sub.link} isExternal={sub.link.includes('http')} textDecor='unset !important' >
                                <Text as='h6' fontWeight='700' lineHeight='6' transition='all 0.3s ease-in-out'>{sub.name} {sub.link.includes('http') && <Icon as={FiExternalLink} fontSize='12px' />}</Text>
                                <Text as='p' fontSize='sm' fontWeight='500' lineHeight='1' color='gray.500' >{sub.description}</Text>
                              </ChakraLink> 
                            </Box>
                          ))}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                : <Box w={[sitemap.length == 2 ? 'auto' : 1/sitemap.length]} borderRadius='10px' transition='all 0.3s ease-in-out' textAlign='center' _hover={{background: 'transparent', color: 'primary'}} key={i}>
                    <ChakraLink as={Link} to={site.link} isExternal={site.link.includes('http')} fontWeight='700' textDecor='unset !important' >
                      {site.Icon
                      ? <IconButton icon={<site.Icon fontSize='25px' />} variant='ghost' onClick={() => site.function && site.function()} aria-label={`icon-${site.name}`} />
                      : <Text as='span'>{site.name} {site.link.includes('http') && <Icon as={FiExternalLink} fontSize='12px' />}</Text> 
                      }
                      
                    </ChakraLink>
                  </Box>
              ))}
            </Flex>
          </Box>
        </Stack>
      </Show>

      <Show breakpoint={'(max-width: 731px)'}>
        <Stack direction='row' align='center' justify='space-between' h='100%' p='2'>
          <Center w='100px' >
            <IconButton icon={<LuMenu fontSize='25px' />} variant='ghost' onClick={() => props.setMenuOpen(true)} aria-label={`icon-menu`} />
            <Box w='100%'>
              <StaticImage src='../../../assets/logos/Logo.png' alt='logo' />
            </Box>
          </Center>
          {/* <IconButton as={HiMenu} aria-label='Menu' ref={btnRef} onClick={onOpen} size='sm' fontSize='4px' colorScheme='white' transition='all 0.5s ease-in-out' _hover={{transform: 'rotate(360deg)'}}/> */}
          <Center w='auto'>
            <IconButton icon={<AiOutlineShoppingCart fontSize='25px' />} variant='ghost' onClick={() => props.setCartOpen(true)} aria-label={`icon-menu`} />
          </Center>
        </Stack>
        <Drawer placement='right' isOpen={isOpen} onClose={onClose} >
          <DrawerOverlay />
          <DrawerContent>
            <Flex align='center' justify='space-between' h='60px' p='2'>
              <Box w='100px' h='100%' bg='lightgray'></Box>
              <DrawerCloseButton position='unset' h='auto'/>
            </Flex>
            <DrawerHeader></DrawerHeader>

            <DrawerBody >
            {sitemap.map((site: any, i: number) => (
                site.subItems.length > 1
                ? <Box p='2' borderRadius='10px' transition='all 0.3s ease-in-out' _hover={{background: 'gray.100'}} key={i}>
                    <Accordion >
                      <AccordionItem border='none'>
                        <AccordionButton p='0' background='transparent !important'>
                          <Flex align='center' justify='center' _hover={{color: 'primary',svg: {transform: 'rotate(-180deg)', fill: 'primary'}}}>
                            <ChakraLink as={Link} to='' fontWeight='700'>{site.name}</ChakraLink>
                            <Icon as={BiChevronDown} fontSize='20px' transition='all 0.3s ease-in-out'/>
                          </Flex>
                        </AccordionButton>
                      
                        <AccordionPanel>
                          {site.subItems.map((sub: any, j: number) => (
                            <Box p='2' key={j} transition='all 0.3s ease-in-out' _hover={{background: 'gray.200',borderRadius: '10px', h6: {color: 'primary'}}}> 
                              <ChakraLink as={Link} to={sub.link} isExternal={sub.link.includes('http')} >
                                <Text as='h6' fontWeight='700' lineHeight='6' transition='all 0.3s ease-in-out'>{sub.name} {sub.link.includes('http') && <Icon as={FiExternalLink} fontSize='12px' />}</Text>
                                <Text as='p' fontSize='sm' fontWeight='500' lineHeight='1' color='gray.500' >{sub.description}</Text>
                              </ChakraLink> 
                            </Box>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                : <Box p='2' borderRadius='10px' transition='all 0.3s ease-in-out' _hover={{background: 'gray.100', color: 'primary'}} key={i}>
                    <ChakraLink as={Link} to={site.link} isExternal={site.link.includes('http')} fontWeight='700' >
                      {site.name} {site.link.includes('http') && <Icon as={FiExternalLink} fontSize='12px' />} 
                    </ChakraLink>
                  </Box>
              ))}
            </DrawerBody>

            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Show>
    </Head>
  )
}

export default Header