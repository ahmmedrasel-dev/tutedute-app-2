import React from 'react';

const Package = ({ name, date, course, enrole, amount }) => {
  return (
    <div className='p-5 rounded-[20px] bg-gradient-to-r from-[#FF864C] to-[#800080]'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-white text-lg'>{name}</h2>
        <p className='text-white text-sm'>{date}</p>
      </div>
      <p className='font-medium text-white'>Courses Enrolled({enrole})</p>
      <div className='flex flex-wrap'>
        {
          course.map((item, index) => <span key={index} className='py-1 px-2 rounded-full text-white border-[#EEAEAE] border-[2px] text-sm mr-2 mt-2'>{item}</span>)
        }


      </div>
      <p className='mt-3 text-base text-white'>Referral Amount <span className='text-2xl font-bold'>₹{amount}</span></p>
    </div>
  );
};

export default Package;