import React from 'react';
import {Tweet} from './index';

const Tweets = (props) => {
    // propsからmapでtweetリスト作成
    const tweetList = props.tweets.map((tw) => (
        <Tweet
          key={tw.id}
          icon={tw.icon}
          displayName={tw.displayName}
          accountName={tw.accountName}
          content={tw.content}
        />
      ));
    
    return <div>{tweetList}</div>;

};


export default Tweets;