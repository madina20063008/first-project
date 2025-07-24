import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoaderOverlay = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="absolute inset-0 z-10 flex justify-center items-center bg-white/50 backdrop-blur-sm rounded-xl">
      <FadeLoader color="#80C4D3" />
    </div>
  );
};

export default LoaderOverlay;
