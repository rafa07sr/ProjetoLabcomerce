import styled from "styled-components"

export const Section = styled.section`
display: flex;
background-color: black;
width: 70vw;
height: 100vh;
justify-content: center;
margin-right: 5vw;
border: none;
border-radius:20px;
`
export const DivCards = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
  

 div{
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 2px 10px brown;
  border: 1px solid brown;
  width: 220px;
  height: 300px;
  align-items: center;
  margin-left: 6vw;
}

img{
  margin-top: 1vh;
  width: 200px;
  height: 200px;
}
  


p{
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-shadow: 1px 1px 1px brown;
  font-size: medium;
  color: white;
}

button{
  border: none;
  font-size: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: orange;
  border-radius: 10px;
  padding: 0.2vh 2vw;
  box-shadow: 2px 3px 5px brown;
  color: white;
}
`
