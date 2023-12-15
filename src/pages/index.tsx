import React from 'react'
import { navigate } from 'gatsby'
import data from '../utils/data'

import { Box, Flex, Text, Heading, Button, Center, Img } from '@chakra-ui/react'
import { Section } from '../components/Collections/section'
import { VerticalCard } from '../components/Cards/ProductCards'

const index = ({ props }: any) => {
  return (
    <>
      <Section sectionstyle={{bg: 'transparent', backdropFilter: 'blur(10px)'}} gap={false}>
        <Box w={['100%','100%','70%','70%','70%']} overflow='hidden' position='relative'  _hover={{img: {transform: 'scale(1.1)'}}}>
          <Img src='images/background_3.jpeg' alt='background_3' w='100%' transition='all 0.5s ease-in-out'/>
          <Center flexDir='column' position='absolute' w='100%' h='100%' bg='blackAlpha.500' top='0' left='0'>
            <Heading fontSize={['16px','16px','30px','30px','34px']} as='h2' color='white' >Fashion is Here</Heading>
            <Text display={['none','block']}  w={['90%','90%','80%','70%','70%']} as='p' color='white' textAlign='center' fontSize='18px'>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</Text>
            <Button size='lg' py='8' mt='3' fontWeight='700' bg='black' colorScheme='blackAlpha' borderRadius='0' onClick={() => navigate('#')}>WEITER</Button>
          </Center>
        </Box>
        <Flex w={['100%','100%','30%','30%','30%']} flexDir={['row','row','column','column','column']} justify='space-between'>
          <Box w='100%' mb={[0,0,3,3,3]} overflow='hidden' position='relative'  _hover={{img: {transform: 'scale(1.1)'}}}>
            <Img src='images/background_2.jpeg' alt='background_2' h='100%' transition='all 0.5s ease-in-out'/>
            <Center flexDir='column' position='absolute' w='100%' h='100%' bg='blackAlpha.500' top='0' left='0'>
              <Text display={['none','none','block']} as='p' color='white' fontSize='18px' fontWeight='700'>SAVE 20%</Text>
              <Heading fontSize={['16px','16px','30px','30px','34px']} as='h2' color='white' >Special Offer</Heading>
              <Button size='lg' py={['3','3','8']} mt='3' fontWeight='700' bg='black' colorScheme='blackAlpha' borderRadius='0' onClick={() => navigate('#')}>20% reduziert</Button>
            </Center>
          </Box>
          <Box w='100%'  overflow='hidden' position='relative'  _hover={{img: {transform: 'scale(1.1)'}}}>
            <Img src='images/accessories_5.jpeg' alt='accessories_5' h='100%' transition='all 0.5s ease-in-out'/>
            <Center flexDir='column' position='absolute' w='100%' h='100%' bg='blackAlpha.500' top='0' left='0'>
              <Text display={['none','none','block']} as='p' color='white' fontSize='18px' fontWeight='700'>SAVE 30%</Text>
              <Heading fontSize={['16px','16px','30px','30px','34px']} as='h2' color='white' >Special Offer</Heading>
              <Button size='lg' py={['3','3','8']} mt='3' fontWeight='700' bg='black' colorScheme='blackAlpha' borderRadius='0' onClick={() => navigate('#')}>30% reduziert</Button>
            </Center>
          </Box>
        </Flex>
      </Section>

      <Section gap={true}>
        <Box flex={1} bg='gray.100' >
          <Center w='100%' h='120px' ><Text as='h3' textAlign='center' fontSize={['24px','30px']} fontWeight='700' >Quality</Text></Center>
        </Box>
        <Box flex={1} bg='gray.100' >
          <Center w='100%' h='120px' ><Text as='h3' textAlign='center' fontSize={['24px','30px']} fontWeight='700' >Free Shipping</Text></Center>
        </Box>
        <Box flex={1} bg='gray.100' >
          <Center w='100%' h='120px' ><Text as='h3' textAlign='center' fontSize={['24px','30px']} fontWeight='700' >35-Day Return</Text></Center>
        </Box>
        <Box flex={1} bg='gray.100' >
          <Center w='100%' h='120px' ><Text as='h3' textAlign='center' fontSize={['24px','30px']} fontWeight='700' >24/7 Support</Text></Center>
        </Box>
      </Section>

      <Section sectionstyle={{background: 'gray.100'}} >
        <Flex gap='5' flexWrap='wrap' justify='space-between'>
          {data?.products.map((item: any, idx: number) => (
            <VerticalCard product={item} idx={idx} key={idx}>
            </VerticalCard>
          ))}
        </Flex>
      </Section>

    </>
  )
}

export default index