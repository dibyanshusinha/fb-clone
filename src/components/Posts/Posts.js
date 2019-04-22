import React from 'react';
import Post from './Post';


const Posts = props => {
    let items = null;
    if (props.data) {
        items = props.data.map((item, i) => {
            return (<Post key={"post" + i} data={item}>{props.childeren}</Post>);
        });
    }

    return (items);
}


export default Posts;