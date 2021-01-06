import Proptypes from "prop-types";

const foodILike = [
  {id : 1, name : "kimchi", many : "3", rating : 5}, 
  {id : 2, name : "ramen", rating : 2}, 
  {id : 3, name : "pizza", many : "10", rating : 3}
]

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food key = {dish.id} name = {dish.name} many = {dish.many} rating = {dish.rating} />)}
    </div>
  );
}

Food.propTypes = {
  name : Proptypes.string.isRequired,
  many : Proptypes.string,
  rating : Proptypes.number.isRequired
}

function Food({name, many, rating}){
  return(
    <div>
      <p>I like {name} and {many}</p>
      <p>{rating}/5.0</p>
    </div>
  );
}

export default App;


