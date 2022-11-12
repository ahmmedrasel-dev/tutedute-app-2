import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Breadcum = () => {
  return (
    <div>
      <ul className='flex lg:items-center items-center'>
        <li>UI/UX</li>
        <FaAngleRight />
        <li>Refer & Earn</li>
        <FaAngleRight />
        <li>Friends Referred </li>
      </ul>
    </div>
  );
};

export default Breadcum;