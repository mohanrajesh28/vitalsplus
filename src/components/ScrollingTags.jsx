import React from 'react';
import '../styles/ScrollingTags.css';

const ScrollingTags = ({ items }) => {
  // Duplicate items to ensure smooth infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="scrolling-tags-container" aria-label="Key features scroll">
      <div className="scrolling-tags-track" role="list">
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="scrolling-tag-item" 
            role="listitem"
            aria-hidden={index >= items.length}
          >
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTags;
