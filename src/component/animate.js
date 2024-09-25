import React, { useState } from 'react';
import SelectComponent from './StateComponent';

const AnimationSelector = () => {
  const [selectedAnimation, setSelectedAnimation] = useState('');

  // Define the data for the optgroups and options
  const animationGroups = [
    {
      label: 'Attention Seekers',
      options: [
        { value: 'animate__animated animate__bounce', title: "bounce" },
        { value: 'animate__animated animate__flash', title: "flash" },
        { value: 'animate__animated animate__pulse', title: "pulse" },
        { value: 'animate__animated animate__rubberBand', title: "rubberBand" },
        { value: 'animate__animated animate__shakeX', title: "shakeX" },
        { value: 'animate__animated animate__shakeY', title: "shakeY" },
        { value: 'animate__animated animate__headShake', title: "headShake" },
        { value: 'animate__animated animate__swing', title: "swing" },
        { value: 'animate__animated animate__tada', title: "tada"},
        { value: 'animate__animated animate__wobble', title: "wobble"},
        { value: 'animate__animated animate__jello', title: "jello" },
        { value: 'animate__animated animate__heartBeat', title: "heartBeat" }
      ]
    },
    {
      label: 'Back Entrances',
      options: [
        { value: 'animate__animated animate__backInDown', title: "backInDown" },
        { value: 'animate__animated animate__backInLeft', title: "backInLeft" },
        { value: 'animate__animated animate__backInRight', title: "backInRight" },
        { value: 'animate__animated animate__backInUp', title: "backInUp" }
      ]
    },
    {
      label: 'Back Exits',
      options: [
        { value: 'animate__animated animate__backOutDown', title: "backOutDown" },
        { value: 'animate__animated animate__backOutLeft', title: "backOutLeft" },
        { value: 'animate__animated animate__backOutRight', title: "backOutRight" },
        { value: 'animate__animated animate__backOutUp', title: "backOutUp" }
      ]
    },
    {
      label: 'Bouncing Entrances',
      options: [
        { value: 'animate__animated animate__bounceIn',title: "bounceIn" },
        { value: 'animate__animated animate__bounceInDown', title: "bounceInDown" },
        { value: 'animate__animated animate__bounceInLeft', title: "bounceInLeft" },
        { value: 'animate__animated animate__bounceInRight', title: "bounceInRight" },
        { value: 'animate__animated animate__bounceInUp', title: "bounceInUp" }
      ]
    },
    {
        label: 'Bouncing Exits',
        options: [
          { value: 'animate__animated animate__bounceOut', title: "bounceOut" },
          { value: 'animate__animated animate__bounceOutDown', title: "bounceOutDown" },
          { value: 'animate__animated animate__bounceOutLeft', title: "bounceOutLeft" },
          { value: 'animate__animated animate__bounceOutRight', title: "bounceOutRight" },
          { value: 'animate__animated animate__bounceOutUp', title: "bounceOutUp'" }
        ]
      }
  ];

  const handleChange = (e) => {
    setSelectedAnimation(e.target.value);
    console.log('Selected Animation:', e.target.value);
  };

  return (
      <SelectComponent groups={animationGroups} handleChange={handleChange} /> 
  );
};

export default AnimationSelector;