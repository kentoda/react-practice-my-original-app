import React from 'react';
import {Tweet} from './index';

const Tweets = (props) => {
    return (
    <>
        {props.tweets.map((tweet, index) => {
         return <Tweet
         key={index}
         icon={tweet.icon}
         displayName={tweet.displayName}
         accountName={tweet.accountName}
         content={tweet.content}
        />
        })}
    </>
    )
};


export default Tweets;