import AddIngredient from "./AddIngredients/AddIngredients";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import {useState} from "react";
import Price from "./Price/Price";


 const App = () => {

     const INGREDIENTS = [
         {name: 'Meat', price: 50, image: meatImage},
         {name: 'Salad', price: 5, image: saladImage},
         {name: 'Cheese', price: 20, image: cheeseImage},
         {name: 'Bacon', price: 30, image: baconImage},
     ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: 1},
    {name: 'Cheese', count: 0, id: 2, },
    {name: 'Salad', count: 0, id: 3, },
    {name: 'Bacon', count: 0, id: 4, }
]);
  const [userChoice, setUserChoice] = useState([]);
  const [price, setPrice] = useState(20);

     const onAdd = name => {

         INGREDIENTS.map(ingred => {
            if(ingred.name === name){
                setPrice(prev => prev + ingred.price)
            }
         });

         setIngredients(ingredients.map(ingred => {
             if (ingred.name === name){
                 setUserChoice([...userChoice, ingred.name]);
                 return {...ingred, count: ingred.count + 1}
             }
             return ingred;
         }));
     };

     const deleteIngredient = name => {
         INGREDIENTS.map(ingred => {
             if(ingred.name === name){
                 setPrice(prev => prev - ingred.price)
             }
         });

         setIngredients(ingredients.map(ingred => {
             if (ingred.name === name){
                 let find = false;
                 let userChoiceCopy = [...userChoice];

                     userChoice.forEach((ingredClass, i) => {
                         if (ingredClass === ingred.name){
                             if (find !== true){
                                 userChoiceCopy.splice(i,1);
                                 setUserChoice(userChoiceCopy);
                                 find = true;
                             }
                         }
                     });
                 if (ingred.count !== 0){
                     return {...ingred, count: ingred.count - 1};
                 }
             }
             return ingred;
         }));
     };

  return (
      <>
         <div className="burger-container">
             <div className="ingredients-container">
                 <h3>Add Ingredients:</h3>
                 {ingredients.map(ingred => (
                         <AddIngredient
                             key={ingred.id}
                             name={ingred.name}
                             img={INGREDIENTS}
                             count={ingred.count}
                             onDelete={() => deleteIngredient(ingred.name)}
                             onAdd={() => onAdd(ingred.name)}/>
                 ))}
             </div>
             <BurgerConstructor userChoiceArray={userChoice} price={price}/>
         </div>
        <Price price={price}/>
      </>
  );
};

export default App;
