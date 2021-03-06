import React, { createContext, Component } from 'react'
import { Product } from '../components/Product'

interface CartItem {
    theItem: Product,
    quantity: number
}

export interface ProviderState {
    cartItems: CartItem[]
}

export interface ContextState extends ProviderState {
    addProductToCart: (product: Product) => void
    deletefromcart: (product: Product, index: number) => void
    countProductsInCart: () => void
}


export const CartContext = createContext<ContextState>({
    cartItems: [],
    addProductToCart: (product: Product) => {
        console.log("error while adding " + product.name + " to the cart")

    },
    deletefromcart: (product: Product, index: number) => {
        console.log("error while deleting" + product.name + "from cart")
    },
    countProductsInCart: () => {
        console.log("error while counting your cart items")
    }
})


export const CartConsumer = CartContext.Consumer
export class CartProvider extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            cartItems: []
        }
    }

    addProductToCart = (product: Product) => {
        const theCart: CartItem[] = Object.assign([], this.state.cartItems)

        const foundProductIndex: number = this.state.cartItems.findIndex((produktToFind) => {
            return product.id === produktToFind.theItem.id
        })
        if (foundProductIndex === -1) { theCart.push({ theItem: product, quantity: 1 }) }
        else {
            theCart[foundProductIndex].quantity++

        }
        this.setState({ cartItems: theCart })
    }
    deletefromcart = (product: Product, index: number) => {
        const theCart: CartItem[] = Object.assign([], this.state.cartItems)

        const foundProdIndex: number = this.state.cartItems.findIndex((productToFind) => {
            return product.id === productToFind.theItem.id
        })

        if (foundProdIndex === -1 || theCart[foundProdIndex].quantity <= 1) {
            theCart.splice(index, 1, { theItem: product, quantity: -1 })
            theCart.splice(index, 1)
        } else {
            theCart[foundProdIndex].quantity--
        }

        this.setState({ cartItems: theCart })
    }

    countProductsInCart = () => {
        let totalQuantity: number = 0
        this.state.cartItems.map((item) => {
            return (
                (
                    totalQuantity += item.quantity
                ))
        })
        return totalQuantity
    }

    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                deletefromcart: this.deletefromcart,
                countProductsInCart: this.countProductsInCart,
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}