import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from 'axios';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
    street: '',
    postalCode: ''
  },
  loading: false
}

orderHandler = (e) => {
  e.preventDefault();
 this.setState( { loading: true  } );
 const order = {
   ingredients: this.state.ingredients,
   price: this.state.totalPrice,
   customer: {
     name: "Casper Feng",
     andress: {
       street: 'Odd Brochmanns veg 143',
       zipCode: '7051',
       country: 'Norway',
     },
     email: 'casp.feng@gmail.com'
   },
   deliveryMethod: 'fastest'
 }
 axios.post('/orders.json', order ).then(response => {
   this.setState( {loading: false} );
   this.props.history.push('/');
 }).catch(error => {
   this.setState( {loading: false} );
 });
}

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeHolder="Your name" className={classes.Input}/>
          <input type="email" name="email" placeHolder="Your email" className={classes.Input}/>
          <input type="text" name="street" placeHolder="Your Street" className={classes.Input}/>
          <input type="text" name="postal" placeHolder="Postal code" className={classes.Input}/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;