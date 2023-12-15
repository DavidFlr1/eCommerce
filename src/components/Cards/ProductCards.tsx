import React from 'react'
import { AppContext } from '../../context/global';
import { Link, navigate } from 'gatsby';
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Button,
  IconButton,
  Input,
  Icon,
  Img,
  LinkBox, LinkOverlay,
} from '@chakra-ui/react'

import { IoRemoveOutline, IoAdd, IoStar, IoBagAddOutline } from "react-icons/io5"
import { MdFavoriteBorder } from "react-icons/md";
import { formatter } from '../../utils';

export function ProductCardCart({ product, idx }: any) {
  const [quantity, setQuantity] = React.useState(product.quantity || 0)
  const context = React.useContext<any>(AppContext)

  const handleChange = (type: 'add' | 'rem' | 'none', value?: number) => {
    if(type === 'add') {
      if(product.stock && quantity == product.stock) return
      setQuantity(quantity + 1)
      context.actions.modifyCartItem(idx, quantity + 1)
      return
    }
    if(type === 'rem') {
      if(quantity == 0 || quantity - 1 == 0) { context.actions.removeCartItem(idx); return}
      setQuantity(quantity - 1)
      context.actions.modifyCartItem(idx, quantity - 1)
      return
    }
    setQuantity(value || 0)
  }

  return (
    <Flex w='100%' my='6'>
      <Box w='35%' mr='5'>
        <Box w='100%' h='120px'>
          <Img src={`${product.imgURL}`} alt={`product_${product.name}`} style={{ width: '100%', height: '100%' }}/>
        </Box>
        <Flex h='35px' >
          <Center w='30%' borderWidth='1px' borderColor='text.100'>
            <IconButton onClick={() => handleChange('rem')} variant='outline' colorScheme='gray' border='none' aria-label='icon-add' icon={<IoRemoveOutline size='20px' />} />
          </Center>
          <Center w='40%' borderTopWidth='1px' borderBottomWidth='1px' borderColor='text.100' >
            <Input value={quantity} onChange={e => handleChange('none', parseInt(e.target.value))} type='number' size='sm' border='none' colorScheme='gray' textAlign='center' fontSize='18px' fontWeight='500' />
          </Center>
          <Center w='30%' borderWidth='1px' borderColor='text.100' >
            <IconButton onClick={() => handleChange('add')} variant='outline' colorScheme='gray' border='none' aria-label='icon-rem' icon={<IoAdd size='20px' />} />
          </Center>
        </Flex>
      </Box>
      <Flex w='65%' flexDir='column' justify='space-between'>
        <LinkBox >
          <LinkOverlay as={Link} href='#' >
            <Flex align='center' justify='space-between' >
              <Box>
                {Array.from({ length: Math.ceil(product.grade) }, () => 1).map((i, idx) => <Icon as={IoStar} fontSize='18px' mx='1px' kye={idx} /> )}
              </Box>
              <Text as='p' fontSize='14px'>{product.grade}/5 <Text as='span' textDecor='underline'>({product.reviews || 0} Reviews)</Text></Text>
            </Flex>
          </LinkOverlay>
        </LinkBox>
        
        <Box>
          <Heading as='h2' fontSize='20px' fontWeight='500' >{product.brand ? `${product.brand}${product.name && ' | '}` : ''}{product.name ? `${product.name}${product.description && ' - '}` : ''}
          <Text as='span' fontWeight='600' textTransform='uppercase' fontSize='17px'>{product.description}</Text></Heading>
        </Box>

        <Flex mt='1'>
          <Flex w='50%'>
            <Text as='p'>Farve:</Text>
            <Flex>
              <Center w='20px' h='20px' mx='2' borderWidth='1px' borderColor={product.color} borderRadius='full' >
                <Box w='15px' h='15px' bg={product.color} borderRadius='full' />
              </Center>
              <Text as='p'>{product.colorName}</Text>
            </Flex>
          </Flex>
          <Flex w='50%'>
            <Text as='p'>Størrelse:&nbsp;</Text>
            <Text as='p'>{product.sizeName}</Text>
          </Flex>
        </Flex>

        <Flex gap='3'>
          <Text as='p' color='gray.400' textDecor='line-through' fontSize='18px' fontWeight='600'>{formatter.format(product.originalPrice)}</Text>
          <Text as='p' color='#9B846D' fontSize='18px' fontWeight='600' >{formatter.format(product.price)}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export function VerticalCard({product, idx}: any) {
  const context = React.useContext<any>(AppContext)
  return (
    <Flex key={idx} flex={1} flexDir='column' align='center' justify='space-between' bg='white' boxShadow='0 0 10px 1px rgba(0, 0, 0, 0.1)' position='relative' >
      <Box>
        <Center overflow='hidden' w='100%'>
          <Box w='100%' h='120px'>
            <Img src={`${product.imgURL}`} alt={`product_${product.name}`} w='100%' objectPosition='center' objectFit='cover' />
          </Box>
        </Center>
        <Flex p='3'>
          <Box textAlign='center' w='100%'>
            <Heading as='h2' fontSize='20px' fontWeight='500' >{product.brand ? `${product.brand}${product.name && ' | '}` : ''}{product.name ? `${product.name}${product.description && ' - '}` : ''}
            <Text as='span' fontWeight='600' textTransform='uppercase' fontSize='17px'>{product.description}</Text></Heading>
          </Box>
        </Flex>
      </Box>

      <Flex p='3' flexDir='column' align='center' justify='space-between' >
        <Flex gap='3'>
          <Text as='p' color='gray.400' textDecor='line-through' fontSize='18px' fontWeight='600'>{formatter.format(product.originalPrice)}</Text>
          <Text as='p' color='#9B846D' fontSize='18px' fontWeight='600' >{formatter.format(product.price)}</Text>
        </Flex>

        <Flex align='center' justify='space-between' >
          <Box>
            {Array.from({ length: Math.ceil(product.grade) }, () => 1).map((i, idx) => <Icon as={IoStar} fontSize='18px' mx='1px' key={idx}/> )}
          </Box>
          <Text as='p' fontSize='14px'>{product.grade}/5</Text>
        </Flex>
      </Flex>

      <IconButton size='sm' icon={<MdFavoriteBorder fontSize='18px' />} colorScheme='blackAlpha' aria-label='add_to_favorites' position='absolute' top='8px' right='48px' onClick={() =>  navigate('/')} />
      <IconButton size='sm' icon={<IoBagAddOutline fontSize='18px' />} colorScheme='blackAlpha' aria-label='add_to_cart' position='absolute' top='8px' right='8px' onClick={() => { context.actions.addCartItem(product)} } />
    </Flex>
  )

}