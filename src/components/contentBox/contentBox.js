import React from "react";
import "./contentBox.css";

const ContentBox = () => (
    <div className="row contentBox">
    <div className="col s12">
      <div className="">
        <div className="text">
        Welcome to a Pokemon Themed React.JS Memory Card Style Game!<br/><br/>
        - To play simply click on a pokemon above, this will cause the pokemon tiles to shuffle.<br/><br/>
        - In order to win you must click on each pokemon exactly "One" time. Accruing 1 point for each successful Guess.<br/><br/>
        - Winning Score is: 12<br/><br/>
        - Should you click on the same pokemon twice in one attempt, your score will be reset and you can try again!
        <br/><br/>
        Thanks for Playing!
        </div>
      </div>
    </div>
  </div>
);

export default ContentBox;