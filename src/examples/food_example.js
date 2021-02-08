import React from "react";
import Potato from "./Potato";
import PropTypes from "prop-types";


const foodILike=[
  {
    id: 1,
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.N-k3hHFQJ1K67IkUbAIh7gHaEK%26pid%3DApi&f=1",
    rating: 4.3
  },
  {
    id: 2,
    name: "Cake",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.H6vm1PMA59cbCTDRdpHWuQHaE7%26pid%3DApi&f=1",
    rating: 4.5
  },
  {
    id: 3,
    name: "steak",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hL3ZXTDMbT5mdSnU7kvoLAHaE8%26pid%3DApi&f=1",
    rating: 4.8
  }
];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

//function Food(food)로 해도되고, function Food({name, picture})로 해도됨
function Food({name, picture, rating}){
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

//Component들은 대문자로 시작해야함
//JSX는 HTML + Javascript라고 보면 됨
//아래의 <Food fav="kimchi" />처럼 component안에 넣어서 데이터를 전달하는걸 Props라고 함
function App() {
  return (
  <div>
    <h1>Hello!</h1>
    {/*foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))과 동일함*/}
    {foodILike.map(renderFood)}
    <Potato />

  </div>);
}

export default App;
