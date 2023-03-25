import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import Cart from "./componentes/Cart/Cart";
import { DivCart } from "./componentes/Cart/Style";
import ProductList from "./componentes/productList/ProductList";
import Filter from "./componentes/Filters/Filter";
import Header from "./componentes/Header/Header";
import { useEffect } from "react";

const GlobalStyled = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}

`
const TotalCart = styled.div`
  display: flex;
  gap: 5px;
  width: 10vw;
  img{
    width: 50px;
    height: 55px;
  }
  
`

const SpaceArround = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
`

const Container = styled.main`
  height:100vh;
  width: 100vw;
`



function App() {

  const [inputBusca, setInputBusca] = useState(' ')
  const [ordenar, setOrdenar] = useState(' ')
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000)
  const [TypeItem, setTypeItem] = useState("")
  const [selectType, setSelectType] = useState(null)

  const handleTypeClick = (item) => {
    setSelectType(item)
  }



  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleTipoItemClick = (tipo) => {
    setTypeItem(tipo)
  }

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value)


  }

  const handleMaxPriceChange = (event) => {

    setMaxPrice(event.target.value)
  }

  const onChangeBusca = (event) => {
    setInputBusca(event.target.value)
  }

  const onChangeOrdenar = (event) => {
    setOrdenar(event.target.value)
  }


  const addCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id)
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
    setTotalCart(totalCart + item.price).toFixed(2)
  }


  const removeCart = (item) => {
    const carNew = cart.findIndex((cartItem) => cartItem.id === item.id)
    if (carNew !== -1) {
      if (cart[carNew].quantity > 1) {
        const updatedCart = [...cart]
        updatedCart[carNew].quantity -= 1
        setCart(updatedCart);
      } else {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id)
        setCart(newCart)
      }
      setTotalCart(totalCart - item.price).toFixed(2)
    }
  }

  return (



    <Container>
      <Header />

      <GlobalStyled />
      <SpaceArround>
        <Filter
          onChangeOrdenar={onChangeOrdenar}
          ordenar={ordenar}
          inputBusca={inputBusca}
          onChangeBusca={onChangeBusca}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleMinPriceChange={handleMinPriceChange}
          handleMaxPriceChange={handleMaxPriceChange}
          handleTypeClick={handleTypeClick}
        />
        <ProductList
          minPrice={minPrice}
          maxPrice={maxPrice}
          inputBusca={inputBusca}
          onChangeBusca={onChangeBusca}
          ordenar={ordenar}
          cart={setCart}
          addCart={addCart}
          selectType={selectType}
          handleTypeClick={handleTypeClick}
        />


        <TotalCart>
          <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Ilustra%C3%A7%C3%A3o-Carrinho-de-Compras-PNG.png"></img>
          {/*  <h2>Cart</h2> */}
          <h2> Total: R$ {totalCart.toFixed(2)}</h2>
        </TotalCart>


        <DivCart>
          <Cart
            cart={cart}
            setCart={setCart}
            removeCart={removeCart}
          />
        </DivCart>
      </SpaceArround>

    </Container>




  )

}

export default App
