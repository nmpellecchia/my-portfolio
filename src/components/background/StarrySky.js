import React from 'react';

function StarrySky() {
  const addStars = amount => {
    const stars = [];
    for (let i = 0; i <= amount; i++) {
      stars.push(<Star />);
    }
    return stars;
  };
  return <div>{addStars(20)}</div>;
}

function Star() {
  return (
    <div
      className="star"
      /* style={{ animation: 'twinkle 5s linear infinite' }} */
    >
      *
    </div>
  );
}

export default StarrySky;
