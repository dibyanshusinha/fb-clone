
import React, { Fragment } from 'react';


import Navbar from './../Navbar/Navbar';

const Layout = props => (
    <Fragment>
        <header><Navbar></Navbar></header>
        <main>{props.children}</main>
    </Fragment>
);

export default Layout;