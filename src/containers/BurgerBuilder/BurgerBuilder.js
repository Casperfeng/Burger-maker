import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const  INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  
  state = {
    ingredients: {
      salad: 0, 
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0){
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients}
      updatedIngredients[type] = updatedCount;
      const oldPrice = this.state.totalPrice;
      const priceSubstraction = INGREDIENT_PRICES[type];
      const newPrice = oldPrice - priceSubstraction;
      this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
    }
  }

  render() {
    const disabledInfo={
      ...this.state.ingredients
    };

    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo} 
          price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
