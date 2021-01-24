import React from 'react';

function LoadingIndicator(props) {
  const { classes } = props;
  return (
    <div className='loading'>
      <div className='ball' />
      <div className='ball' />
      <div className='ball' />
      <div className='ball' />
    </div>
  );
}

export default LoadingIndicator;
