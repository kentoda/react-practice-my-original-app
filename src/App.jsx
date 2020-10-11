import React, {useCallback, useState} from 'react';
import './assets/styles/style.css';
import {Tweets, TweetInput} from "./component/index";

const App = () =>  {
  const [tweets, setTweets] = useState([
    {
    icon:"🍗",
    displayName:"筋肉太郎",
    accountName:"kinnikuman",
    content:"肉だけだったら、2キロ食べれます"
    },
    {
    icon:"🍜",
    displayName:"二郎系",
    accountName:"ramenma",
    content:"ぜんマシマシ",
    }
  ]);

  const addTweet = useCallback((tweet) => setTweets((prev) =>
   [tweet, ...prev]), [setTweets]);

  return (
    <div>
      <TweetInput addTweet={addTweet}/>
      <Tweets tweets={tweets}/>
    </div>
  );
}



export default App
