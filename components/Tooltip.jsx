// components/Tooltip.js
import React from 'react';
import mongo from '../public/assets/mongodb.svg'
import express from '../public/assets/express.svg'
import react from '../public/assets/react.svg'
import node from '../public/assets/node.svg'
import Image from 'next/image';

const Tooltip = () => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-icon mongodb">
        <Image src={mongo} alt="mongodb" />
        <span>M</span>
        <div className="tooltip"><span>MongoDB</span></div>
      </div>
      <div className="tooltip-icon express">
        <div className="tooltip"><span>Express.js</span></div>
        <Image src={express} alt="express" />
        <span>E</span>
      </div>
      <div className="tooltip-icon react">
        <Image src={react} alt="react" />
        <span>R</span>
        <div className="tooltip"><span>React.js</span></div>
      </div>
      <div className="tooltip-icon node">
        <Image src={node} alt="node" />
        <span>N</span>
        <div className="tooltip"><span>Node.js</span></div>
      </div>
    </div>
  );
};

export default Tooltip;
