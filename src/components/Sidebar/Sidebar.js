import React from 'react';
import ImageTxt from './../../components/Image&TextLink/Img&TxtLink';
import Stories from './../../components/Stories/Stories';

import classess from './Sidebar.css';

const sideBar = props => {
    let items = null;
    if (props.data && props.position === 'left') {
        items = props.data.map((item, i) => {
            return (<div className="grpTitle" key={"Itx" + i} >
                <div className="bold">{item.section}</div>
                <div>{item.content.map((y, j) => <ImageTxt key={"Itx" + i + j} link={`sidebar/${y.title ? y.title.replace(" ", "-") : "/404"}`} img={y.img} text={y.title} />)}
                </div>
            </div>);
        });
    }

    let addClass = ""
    if (props.data && props.position === 'right') {
        items = (<Stories data={props.data} />);
        addClass = "storyboard"
    }



    return (
        <aside className={`sidebar height-full scroll-y scroll-hide ${addClass}`}>
            {items}
        </aside>
    );
}


export default sideBar;