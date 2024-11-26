import React from 'react';
import { FaBolt } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <FaBolt className="loading-icon" />
      </div>
    </div>
  );
};

export default Loading; 