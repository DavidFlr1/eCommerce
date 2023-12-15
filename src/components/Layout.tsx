import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import { Consumer } from '../context/global'
import GlobalContext from '../context/global'

import Header from './Nav/Header'
import Footer from './Nav/Footer'
import SideMenu from './Nav/SideMenu'
import SideCart from './Nav/SideCart'

import theme from '../styles/theme'

import '../styles/fonts.css'

export function Layout({ children, location }: any) {
  const [cartOpen, setCartOpen] = React.useState<boolean>(false)
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true)

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <GlobalContext>
          <Box minH='100vh' position='relative'>
            <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Header setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
            <Box maxW='100vw' overflow='hidden'>
              <Consumer>
                { (cont: any) => React.cloneElement(children, {context: cont}) }
              </Consumer>
            </Box>
            <Footer />
            <SideCart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
          </Box>
        </GlobalContext>
      </ChakraProvider>
    </CookiesProvider>
  )
}