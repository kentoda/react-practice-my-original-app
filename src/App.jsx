import React from 'react';
import Button from '@material-ui/core/Button';
import Tweet from "./Tweet";
import './assets/styles/style.css';

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
