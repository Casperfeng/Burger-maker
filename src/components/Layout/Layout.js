import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

//Aux is used to avoid using a div tag
const layout = (props) => (
<Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={classes.Content}>
    {props.children}
  </main>
</Aux>
);

export default layout;