import React from 'react';

import NavItem from './NavItem';
import ImgTextLink from './../../components/Image&TextLink/Img&TxtLink'

import ppSmall from './../../assets/pp-small.jpg';

const Navbar = (props) => (
    <nav className="Navbar ">
        <div className="menu width-full height-full inline all-grow text-center small-only">
            <NavItem link="/" exact><i className="fas fa-pager"></i></NavItem>
            <NavItem link="/friends"><i className="fas fa-user-friends"></i></NavItem>
            <NavItem link="/messages"><i className="fab fa-facebook-messenger"></i></NavItem>
            <NavItem link="/bells"><i className="fas fa-bell"></i></NavItem>
            <NavItem link="/search"><i className="fas fa-search"></i></NavItem>
            <NavItem link="/menu"><i className="fas fa-bars"></i></NavItem>
        </div>
        <div className="large-only menu space-between width-full height-full inline text-center">
            <div className="inline">
                <div className="logo"><NavItem link="/brand-page"><i className="fab fa-facebook-square"></i></NavItem></div>
                <div className="searchbar"><input type="text" placeholder="Search" /> <span className="icon"><i className="fas fa-search"></i></span></div>
            </div>
            <div className="inline small-text">
                <div><ImgTextLink link="/name" img={ppSmall} text={"Dibyanshu"} /> </div>
                <div><NavItem link="/">Home</NavItem></div>
                <div><NavItem link="/create">Create</NavItem></div>
                <div className="inline icons">
                    <NavItem link="/friends"><i className="fas fa-user-friends"></i></NavItem>
                    <NavItem link="/messages"><i className="fab fa-facebook-messenger"></i></NavItem>
                    <NavItem link="/bells"><i className="fas fa-bell"></i></NavItem>
                </div>
                <div className="inline icons">
                    <NavItem link="/quick-help"><i className="fas fa-question-circle"></i></NavItem>
                    <NavItem link="/more"><i className="fas fa-caret-down"></i></NavItem>
                </div>
            </div>
        </div>
    </nav>
);


export default Navbar;