import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger =(props) =>{

// Object.key is javascript method that extract key & return an array which contain string of key in end
const tranfromedIngredients =Object.keys(props.ingredients)
.map(igKey=>{
    return [...Array(props.ingredients[igKey])].map((_, i)=>{
       return <BurgerIngredient key={igKey+i} type={igKey}/>;
    })
})
.reduce((arr, el)=>{
    return arr.concat(el)
},[]);

console.log(tranfromedIngredients);


    return(
        <div className={classes.Burger}>
            
           <BurgerIngredient type="bread-top"/>
                {tranfromedIngredients}
           <BurgerIngredient type="bread-bottom"/>
       
        </div>
    )
    }

export default burger;