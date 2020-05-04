import React from 'react';
import Aux from '../../hoc/Auxilory';
import classes from './Layout.css';

const Layout =(props)=>{
    return(
<Aux>
    <div>Toolbar,sidebar,Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
</Aux>
    )
}

export default Layout;