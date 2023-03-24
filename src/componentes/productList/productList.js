import React from "react";
import { useState } from "react";
import { Section, DivCards } from "./style";



const ProductList = ({ inputBusca, ordenar, addCart, minPrice, maxPrice }) => {


  const [list, setList] = useState([
    {
      id: 1,
      name: " Space sweatshirt",
      type: "clothes",
      price: 145.55,
      image: "https://http2.mlstatic.com/D_NQ_NP_821102-MLB41714345406_052020-W.webp"
    },
    {
      id: 2,
      name: " Shirt Nasa",
      type: "clothes",
      price: 75.15,
      image: "https://http2.mlstatic.com/D_NQ_NP_762462-MLB41142311495_032020-W.webp"
    },
    {
      id: 3,
      name: "Sweatshirt Nasa",
      type: "clothes",
      price: 132.92,
      image: "https://http2.mlstatic.com/D_NQ_NP_713314-MLB46592070396_072021-W.webp"
    },
    {
      id: 4,
      name: "Sweatshirt Nav",
      type: "clothes",
      price: 185.15,
      image: "https://http2.mlstatic.com/D_NQ_NP_610005-MLB50911170540_072022-W.webp"
    },
    {
      id: 5,
      name: "Space Nav",
      type: "clothes",
      price: 179.45,
      image: "https://http2.mlstatic.com/D_NQ_NP_892938-MLB31895751514_082019-W.webp"
    },
    {
      id: 6,
      name: "Space Station",
      type: "clothes",
      price: 170.95,
      image: "https://http2.mlstatic.com/D_NQ_NP_994254-MLB45119722796_032021-W.webp"
    },
    {
      id: 7,
      name: " Shirt Space Bus",
      type: "clothes",
      price: 45.65,
      image: "https://http2.mlstatic.com/D_NQ_NP_894615-MLB31327464028_072019-W.webp"
    },
    {
      id: 8,
      name: " children's boot",
      type: "clothes",
      price: 99.90,
      image: "https://http2.mlstatic.com/D_NQ_NP_927664-MLB47062498045_082021-O.webp"
    },
    {
      id: 9,
      name: " space tennis",
      type: "clothes",
      price: 175.19,
      image: "https://http2.mlstatic.com/D_NQ_NP_952031-MLB50543817359_072022-O.webp"
    },
    {
      id: 10,
      name: " space shoe",
      type: "clothes",
      price: 130.40,
      image: "https://http2.mlstatic.com/D_NQ_NP_650933-MLB45551938875_042021-O.webp"
    },
    {
      id: 11,
      name: " Babuche Plugt",
      type: "clothes",
      price: 45.75,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_761808-MLB45990380567_052021-F.webp"
    },
    {
      id: 12,
      name: " Children's Neoprene Sneaker",
      type: "clothes",
      price: 120.90,
      image: "https://http2.mlstatic.com/D_NQ_NP_650933-MLB45551938875_042021-O.webp"
    },
    {
      id: 13,
      name: " Children's Sneakers Bibi Calce",
      type: "clothes",
      price: 59.25,
      image: "https://http2.mlstatic.com/D_NQ_NP_818657-MLB49342092665_032022-O.webp"
    },
    {
      id: 14,
      name: " Boneco espacial",
      type: "toy",
      price: 75.35,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_895497-MLB29774109214_032019-F.webp"
    },
    {
      id: 15,
      name: " box espace",
      type: "toy",
      price: 95.75,
      image: "https://http2.mlstatic.com/D_NQ_NP_608388-MLB51664504578_092022-O.webp"
    },
    {
      id: 16,
      name: " nave space",
      type: "toy",
      price: 80.85,
      image: "https://http2.mlstatic.com/D_NQ_NP_875978-MLB52498265568_112022-O.webp"
    },
    {
      id: 17,
      name: " andar space",
      type: "toy",
      price: 110.15,
      image: "https://http2.mlstatic.com/D_NQ_NP_787689-MLB43999937181_112020-O.webp"
    },
    {
      id: 18,
      name: " nave space",
      type: "toy",
      price: 50.35,
      image: "https://http2.mlstatic.com/D_NQ_NP_782727-CBT54069341145_022023-O.webp"
    },
    {
      id: 19,
      name: " urso espacial",
      type: "toy",
      price: 95.15,
      image: "https://http2.mlstatic.com/D_NQ_NP_645079-MLB47660700301_092021-O.webp"
    },
    {
      id: 20,
      name: " mini toy",
      type: "toy",
      price: 25.10,
      image: "https://http2.mlstatic.com/D_NQ_NP_811036-MLB54082349112_022023-O.webp"
    },
    {
      id: 21,
      name: " buzz",
      type: "toy",
      price: 225.10,
      image: "https://http2.mlstatic.com/D_NQ_NP_928922-MLB44846494367_022021-O.webp"
    },
    {
      id: 22,
      name: " carbaby space",
      type: "toy",
      price: 215.30,
      image: "https://http2.mlstatic.com/D_NQ_NP_828112-MLB53882474568_022023-O.webp"
    },
    {
      id: 22,
      name: " montarbus",
      type: "toy",
      price: 215.30,
      image: "https://http2.mlstatic.com/D_NQ_NP_825185-MLB46133857281_052021-O.webp"
    },
    {
      id: 23,
      name: " retrocar",
      type: "toy",
      price: 125.40,
      image: "https://http2.mlstatic.com/D_NQ_NP_801707-MLB51232659502_082022-O.webp"
    },
    {
      id: 24,
      name: " imoblile toy",
      type: "toy",
      price: 133.40,
      image: "https://http2.mlstatic.com/D_NQ_NP_611141-MLB54274126311_032023-O.webp"
    },
    {
      id: 25,
      name: " estacao do espaco",
      type: "toy",
      price: 183.20,
      image: "https://http2.mlstatic.com/D_NQ_NP_854977-MLB51830175667_102022-O.webp"
    },
  ])


  const filteredProducts = list.filter((product) => product.price >= minPrice && product.price <= maxPrice)



  return (
    <Section>
      <DivCards>
        {filteredProducts
          .filter((item) => {
            return inputBusca
              ? item.name.toLocaleLowerCase().includes(inputBusca)
              : true;
          })
          .sort((a, b) => {
            if (ordenar === "Up") {
              return a.price - b.price;
            } else if (ordenar === "Down") {
              return b.price - a.price;
            } else {
              return 0;
            }
          })
          .map((item) => (
            <div key={item.id}>
              <img src={item.image}></img>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => addCart(item)}>Add to Cart</button>
            </div>
          ))}
      </DivCards>
    </Section>
  );


}


export default ProductList