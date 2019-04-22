import React from 'react';
import moment from 'moment';


const story = props => {

    if (props.data) {
        return (
            <article className="story">
                <div className="inline align-center">
                    <div className="icon">
                        <img src={props.data.img} className="responsive circle" alt="" />
                    </div>
                    <div className="text">
                        <span>{props.data.name}</span><br /><span className="time">{moment.unix(props.data.t).fromNow()}</span>
                    </div>
                </div>
            </article>
        );
    }
}


export default story;