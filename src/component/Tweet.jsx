import React, {useState, useCallback} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const Tweet = (props) => {

    // いいね機能useStateを使用しTweetコンポーネントに状態を持たせる
   const [liked, setLike] = useState(false);

   const toggleLike = useCallback(() => {
        setLike((prev) => !prev)
   },[setLike]);


   return (
    <div className="tweet">
      <div className="icon-container">{props.icon}</div>
        <div className="body-container">
          <div className="status-display">
            <span className="display-name">{props.displayName}</span>
            <span className="account-name">@{props.accountName}</span>
          </div>
        <div className="content">{props.content}</div>
        <div className="status-action">
        <span onClick={toggleLike}>{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</span>
        </div>
    </div>
  </div>
   )
};

export default Tweet;