import * as React from 'react';
import data from '../utils/data'
import { formatter } from '../utils';

export const AppContext = React.createContext(null);
export const Consumer = AppContext.Consumer;

export type ProductProps = {
  imgULR: string
  name: string
  description: string
  brand?: string
  quantity: number
  stock: number
  size: string | number
  sizeName: string
  color: string
  colorName: string
  variant?: string
  price: string
  originalPrice?: string
  discount?: string
  grade?: 1 | 2 | 3 | 4 | 5
  reviews?: number
}

export type CartProps = {
  products: Array<ProductProps>
  redeem?: string
  discount?: string
}

export function MyContext(props: any) {
  //^ Handle cart events
    const [cart, setCart] = React.useState<CartProps>({products: [data.products[0]]})
    const addCartItem = (item: ProductProps) => {
      setCart((curr: CartProps) => {
        return {...curr, products: [...curr.products, item]}
      })
      updateCartAmount()
    }
    const modifyCartItem = (idx: number, qty: number) => {
      setCart((curr: CartProps) => { 
        curr.products[idx].quantity = qty
        return curr
      })
      updateCartAmount()
    }
    const removeCartItem = (idx: number) => {
      setCart((curr: CartProps) => { 
        let temp = {...curr}
        temp.products.splice(idx, 1)
        return temp
      })
      updateCartAmount()
    }

    const clearCart = () => {
      setCart({products: []})
    }

    //^ Handle total
    const [cartAmount, setCartAmount] = React.useState('')
    const updateCartAmount = () => {
      setCartAmount(formatter.format(cart.products.reduce((c: any, q: any)=> c + q.price * q.quantity, 0)))
    }

    React.useEffect(() => updateCartAmount(), [cart])

  return (
    <AppContext.Provider value={{
        cart,
        cartAmount,
        actions: {
          addCartItem,
          modifyCartItem,
          removeCartItem,
          clearCart,
        }
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default MyContext