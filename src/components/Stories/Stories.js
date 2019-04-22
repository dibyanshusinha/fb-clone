import React, { Fragment } from 'react';
import Story from './Story';
import NavItem from './../Navbar/NavItem';

import classess from './Story.css';

const Stories = props => {
    let items = null;
    if (props.data) {
        items = props.data.map((item, i) => {
            return (<Story key={"story" + i} data={item}>{props.childeren}</Story>);
        });
    }

    return (
        <Fragment>
            <div className="conf">
                <span className="left"><b>Stories</b></span>
                <span className="right"><NavItem link="/something">Archive </NavItem> <NavItem link="/something"> Settings</NavItem></span>
                <span className="clearfix"></span>
            </div>
            <div className="stories">{items}</div>
        </Fragment>
    );
}


export default Stories;
