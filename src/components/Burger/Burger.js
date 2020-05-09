import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIncredient from '../Burger/BurgerIncredient/BurgerIncredient.module.css';

const burger =(props) =>{

    return(
        <div className={classes.Burger}>
            <BurgerIncredient type="bread-top"/>
            <BurgerIncredient type="cheese"/>
            <BurgerIncredient type="salad"/>
            <BurgerIncredient type="bread-bottom"/>
        </div>
    )
}

export default burger;