import React from 'react';
import logoStar from '../images/projectIntro.gif';
import '../css/Loading.css';

function Loading() {
  return (
    <div className="img-star">
      <img src={ logoStar } alt="Star Wars gif" />
    </div>
  );
}

export default Loading;
