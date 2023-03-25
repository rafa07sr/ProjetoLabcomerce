import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
padding: 5vw;
width: 20vw;
h2{
    text-shadow: 2px 3px 5px brown ;
    color: white;
    font-size: 1.5rem;
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
  margin-top: 1vh;
  margin-bottom: 2vh;
}
input{
    margin-top: 1vh;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 2px 2px 3px brown;
}

color: brown;
font-size: large;

`
export const Select = styled.select`
display: flex;
flex-direction: column;
margin-top: 5vh;
border: none;
border-radius:10px;
padding: 1vh 3vw;
box-shadow: 1px 1px 5px black;
`