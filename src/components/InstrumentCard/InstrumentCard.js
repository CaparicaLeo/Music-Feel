import React from 'react';

function InstrumentCard({ name, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default InstrumentCard;
