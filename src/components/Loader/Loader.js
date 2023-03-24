import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css';

export function Loader() {
  return (
    <div className='loader-container'>
        <InfinitySpin color="#a52a2a"/>
    </div>
  )
}
