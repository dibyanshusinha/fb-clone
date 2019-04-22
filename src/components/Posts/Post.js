import React from 'react';
import moment from 'moment';


import ImageTxt from './../../components/Image&TextLink/Img&TxtLink';
import classess from './Post.css';

const Post = props => {
    // comments: [{
    //     by: "Someone",
    //     t: "1529644667834",
    //     msg: "Of course you need the fetched data in your local state",
    //     img: "https://placeimg.com/20/20/any?random=258"
    // }, {
    //     by: "Someone else",
    //     t: "1529644667834",
    //     msg: "Of course you need the fetched data in your local state"
    // }]

    if (props.data) {
        const item = props.data;
        return (
            <article className="post">
                <div className="title">
                    <ImageTxt link="/linktopost" img={item.posterImg} text={item.by}><span></span></ImageTxt>
                    <div className="postTime"><span>{moment.unix(item.t).fromNow()}</span></div>
                    <div className="more"><i className="fas fa-ellipsis-h"></i></div>
                </div>
                <div className="body">
                    <img className="responsive" src={item.img} alt="" />
                </div>
                <div className="actions">
                    <div className="emo">
                        <span><i className="fas fa-smile" /> <i className="fas fa-thumbs-up" /></span>
                        <span className="text">{item.actions}</span>
                        <hr />
                    </div>
                    <div className="inline width-full all-grow text-center">
                        <div><span className="far fa-thumbs-up" /> Like</div>
                        <div><span className="far fa-comment" /> Comment</div>
                        <div><span className="fas fa-share" /> Share</div>
                    </div>
                    <hr />
                </div>
                <div className="comments">

                </div>
            </article>
        );
    }
}


export default Post;