import React from 'react';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);