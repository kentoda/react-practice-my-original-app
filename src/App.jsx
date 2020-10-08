import React from 'react';
import './assets/styles/style.css';
import {Tweet, Tweets} from "./component/index";

const App = () =>  {
  return (
  <div>
    <Tweet
    icon="🍗"
    displayName="筋肉太郎"
    accountName="kinnikuman"
    content="肉だけだったら、2キロ食べれます"
  />
  <Tweet
    icon="🍜"
    displayName="二郎系"
    accountName="ramenma"
    content="ぜんマシマシ"
  />
</div>
  );
}

export default App
