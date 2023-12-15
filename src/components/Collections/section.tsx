import React from 'react'

import { Container, Box, Flex} from '@chakra-ui/react'

export const Section = (props: any) => {
  //? VARIABLES - STATES - PROPS - REFS
  const { 
    px = [5,5,10,20,20],
    py = [5,6],
    maxW = ['2xl','2xl','4xl','6xl','7xl','7xl','8xl'], 
    sectionstyle = {},
    gap = true,
    sizing = true,
    children
  } = props

  return (
    <Box as='section' {...sectionstyle} position='relative'>
      <Container maxW={maxW} px={px} py={py} {...props} >
        {
          children.length && children.length > 1
          ? <Flex flexWrap={'wrap'} gap={gap && '3'}>
              {children.map((child: any, i: number) => (
                child
              ))}
            </Flex>
          : <Flex w={sizing ? '100%' : sizing}>{children}</Flex>
        }
      </Container>
    </Box>
  )
}