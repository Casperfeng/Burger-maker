import React from 'react';
import Aux from '../../hoc/Aux';

//Aux is used to avoid using a div tag
const layout = (props) => (
<Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main>
    {props.children}
  </main>
</Aux>
);

export default layout;