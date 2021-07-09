import React from 'react';
import './StarrySky.css';

function StarrySky() {
  const addStars = amount => {
    const stars = [];
    for (let i = 0; i <= amount; i++) {
      stars.push(<Star key={i.toString()} />);
    }
    return stars;
  };
  return (
    <div className="night-sky">
      {addStars(30)}
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </div>
  );
}

function Star() {
  return (
    <div
      className="star"
      style={{
        /* prettier-ignore */ animation: `twinkle ${( Math.random() * 5 + 3).toString()}s linear infinite`,
        top: `${Math.random() * window.innerHeight}px`,
        left: `${Math.random() * window.innerWidth}px`,
      }}
    ></div>
  );
}

function ShootingStar() {
  return (
    <div
      className="shooting-star"
      style={{
        /* prettier-ignore */ animation: `falling-trajectory ${(Math.random() * 30 + 2).toString()}s linear infinite`,
        top: `${Math.random() * (window.innerHeight - 300 - 50) + 10}px`,
        left: `${Math.random() * (window.innerWidth - 300 - 50) + 10}px`,
      }}
    ></div>
  );
}

export default StarrySky;
