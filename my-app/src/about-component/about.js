import React from 'react';
import './about.scss'
import expiration_ico from './expiration_ico.svg'
import fa2_ico from './twofa_ico.svg'
import encryption_ico from './encryption_ico.svg'

const posts = [
    {id: 1, img: encryption_ico, title: 'Encryption', content: 'Lorem ipsum dolor sit amet…'},
    {id: 2, img: expiration_ico, title: 'Expiration', content: 'Lorem ipsum dolor sit amet…'},
    {id: 3, img: fa2_ico, title: '2 Factor Authentication', content: 'Lorem ipsum dolor sit amet…'}
];


function Blog(props) {
    const post = props.posts.map((item) =>
            <div className="post" key={item.id}>
                <img key={item.img} className="post-ico" src={item.img} alt={item.title}/>
                <h4 key={item.title} className="post-title"> {item.title} </h4>
                <p key={item.content} className="post-content">{item.content}</p>
            </div>

    );

    return (
        <div className="blog">
            {post}
        </div>
    );
}

function About() {
    return (
        <div className="about">
                <Blog posts={posts}/>
        </div>
    );
}


export default About;
