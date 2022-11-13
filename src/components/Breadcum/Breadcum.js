import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Breadcum = () => {
  return (
    <div>
      <ul className='flex lg:items-center items-center py-8'>
        <li>UI/UX</li>
        <FaAngleRight />
        <li>Refer & Earn</li>
        <FaAngleRight />
        <li>Friends Referred </li>
      </ul>

      <p className='flex items-center mb-2 lg:hidden'><AiOutlineArrowLeft /> go back</p>
    </div>
  );
};

export default Breadcum;