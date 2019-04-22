import React from 'react';

import NavItem from './../Navbar/NavItem';
import classess from './ImgTxt.css';

const ImgTxtLink = props => (
    <div className="img-text">
        <NavItem link={props.link}>
            <span className="icon">
                <img src={props.img} alt="" className="responsive circle" />
            </span>
            <span>{props.text}</span>
        </NavItem>
        {props.children}
    </div>
);

export default ImgTxtLink;