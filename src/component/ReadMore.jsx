import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div    className='p-4'>
      {isTruncated ? (
        <p>{`${text.slice(0, maxLength)}...`}</p>
      ) : (
        <p>{text}</p>
      )}
      <button onClick={toggleTruncate}>
        {isTruncated ? 'Read More' : 'Read Less'}
      </button>
    </div>
  );
};

export default ReadMore;
