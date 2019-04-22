import React, { Fragment } from 'react';

import Sidebars from './../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';


class Home extends React.Component {
    state = {
        sidebar1: null,
        storybar: null,
        posts: null
    }

    handleScroll() {
        console.log("Call Foo");
        if (window.innerHeight + document.documentElement.scrollTo === document.documentElement.offsetHeight) {
            console.log("Get New Data");
        };
    };

    componentDidMount() {
        // await data from api
        const sidebar1 = [
            {
                "section": "Groups",
                "content": [
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any" },
                    { "title": "quasi architecto beatae", img: "https://loremflickr.com/20/20?random=1" },
                    { "title": "ipsum quia dolor sit", img: "https://loremflickr.com/20/20?random=2" }
                ]
            },
            {
                "section": "Shortcuts",
                "content": [
                    { "title": "Quis autem vel", img: "https://placeimg.com/20/20/any?random=2" },
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any?random=3" },
                    { "title": "ipsum quia dolor sit", img: "https://placeimg.com/20/20/any?random=25" },
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any?random=289" },
                    { "title": "quasi architecto beatae", img: "https://placeimg.com/20/20/any?random=28" },
                ]
            },
            {
                "section": "Explore",
                "content": [
                    { "title": "quasi architecto beatae", img: "https://placeimg.com/20/20/any?random=288" },
                    { "title": "ipsum quia dolor sit", img: "https://placeimg.com/20/20/any??random=2897" },
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any" },
                    { "title": "Quis autem vel", img: "https://placeimg.com/20/20/any" },
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any" },
                    { "title": "Quis autem vel", img: "https://placeimg.com/20/20/any" },
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any" },
                    { "title": "ipsum quia dolor sit", img: "https://placeimg.com/20/20/any" },
                    { "title": "Lorem Ipsum Motto", img: "https://placeimg.com/20/20/any" },
                    { "title": "ipsum quia dolor sit", img: "https://placeimg.com/20/20/any" }

                ]
            }
        ];
        this.setState((prevState) => {
            return { sidebar1 }
        });
        const posts = [{
            by: "Dibyanshu1",
            posterImg: "https://placeimg.com/40/40/tech",
            title: "Lorem Ipsum Motto",
            img: "https://placeimg.com/800/600/any",
            posttype: "image",
            t: "1555850147",
            actions: "Alok Kumar Pandey, Saroj Singh and 37 others",
            comments: [{
                by: "Someone",
                t: "1555750147",
                msg: "Of course you need the fetched data in your local state",
                img: "https://placeimg.com/20/20/any?random=258"
            }, {
                by: "Someone else",
                t: "1555450147",
                msg: "Of course you need the fetched data in your local state"
            }]
        }, {
            by: "Dibyanshu2",
            posterImg: "https://placeimg.com/40/40/tech",
            title: "Lorem Ipsum Motto",
            img: "https://placeimg.com/800/600/any",
            posttype: "image",
            t: "1555850147",
            actions: "Alok Kumar Pandey, Saroj Singh and 37 others",
            comments: [{
                by: "Someone",
                t: "1555750147",
                msg: "Of course you need the fetched data in your local state",
                img: "https://placeimg.com/20/20/any?random=258"
            }, {
                by: "Someone else",
                t: "1555450147",
                msg: "Of course you need the fetched data in your local state"
            }]
        }, {
            by: "Dibyanshu3",
            posterImg: "https://placeimg.com/40/40/tech",
            title: "Lorem Ipsum Motto",
            img: "https://placeimg.com/800/600/any",
            posttype: "image",
            t: "1555850147",
            actions: "Alok Kumar Pandey, Saroj Singh and 37 others",
            comments: [{
                by: "Someone",
                t: "1555750147",
                msg: "Of course you need the fetched data in your local state",
                img: "https://placeimg.com/20/20/any?random=258"
            }, {
                by: "Someone else",
                t: "1555450147",
                msg: "Of course you need the fetched data in your local state"
            }]
        }];
        this.setState((prevState) => {
            return { posts }
        });

        const storybar = [
            {
                name: "Someone else",
                t: "1555450147",
                img: "https://placeimg.com/60/60/any?random=258"
            },
            {
                name: "Sone else",
                t: "1555450147",
                img: "https://placeimg.com/60/60/any?random=258"
            }
        ];
        this.setState((prevState) => {
            return { storybar }
        });

        window.addEventListener('scroll', this.handleScroll());

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        return (
            <Fragment>
                <Sidebars data={this.state.sidebar1} position={"left"}>
                </Sidebars>
                <section className="posts-container height-full scroll-y" >
                    <Posts data={this.state.posts} />
                </section>
                <Sidebars data={this.state.storybar} position={"right"}></Sidebars>
            </Fragment>
        );
    }
}

export default Home;