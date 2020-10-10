import React, {useRef, useCallback} from 'react';

const TweetInput = (props) => {
 // 要素にアクセスするための参照を取得
  const textRef = useRef(null);

  // Tweetボタンクリック時のコールバック関数を作って保存
  const sendTweet = useCallback(() => {
    if(textRef.current) {
      props.addTweet({
        id: new Date().getTime(), 
        icon: '😇', 
        displayName: 'アンポンタン',
        accountName: 'engel',
        content: textRef.current.value
      });
    }
  }, [textRef.current, props.addTweet]);

  return (
    <div>
      <div><textarea className="tweet-textarea" ref={textRef}></textarea></div>
      <div><button onClick={sendTweet} className="send-tweet">Tweet</button></div>
    </div>
  );
};

export default TweetInput;
