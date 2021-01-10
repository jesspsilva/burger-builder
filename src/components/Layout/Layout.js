import React from 'react';

const layout = (props) => (
    <div>
        Toolbar, SideDrawer, Backdop
    </div>
    <main>
        {props.children}
    </main>
);