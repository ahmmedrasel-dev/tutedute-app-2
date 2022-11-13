import React from 'react';
import Breadcum from '../Breadcum/Breadcum';
import Package from '../Package/Package';

const card = [
  {
    name: 'Dhiraj Saxsena',
    date: '14 Sep, 2022',
    course: ['UI/UX', 'Photoshop', 'Illustrator', 'Paython', 'MERN', 'Java'],
    amount: 185,
    enrole: 6
  },
  {
    name: 'Subhash Mishra',
    date: '15 Sep, 2022',
    course: ['UI/UX', 'Photoshop', 'Illustrator', 'Paython', 'MERN', 'Java', 'C++'],
    amount: 485,
    enrole: 10,
  },
  {
    name: 'Prafull Kumar',
    date: '24 Sep, 2022',
    course: ['UI/UX', 'Photoshop', 'Illustrator', 'Ruby', 'MERN', 'Java', 'PHP'],
    amount: 485,
    enrole: 30
  }
]

const Home = () => {
  return (
    <div className='lg:mx-52 mx-10 lg:mt-0 mt-4'>
      <Breadcum></Breadcum>
      <div className='flex justify-between'>
        <div>
          <h3 className='font-semibold	text-2xl text-tutePrimary mb-4'>Your Referral Code </h3>
          <div className='border-[#DFDFDF] rounded-[10px] p-[13px] border-[1.5px]'>
            <p className='font-medium text-xl text-tutePrimary tracking-code text-center'>EDCH54</p>
          </div>
        </div>

        <div className='bg-white p-5 drop-shadow-[0px_2px_8px_rgba(128,0,128,0.15)] rounded-[20px]'>
          <p className='text-sm text-tutePrimary'>Wallet Balance</p>
          <h3 className='text-base text-black font-medium mt-2 '>₹ 500</h3>
        </div>

      </div>


      <p className='font-semibold text-xl text-tutePrimary mt-8'>Friends who enrolled<span className='text-[#626262]'>(3)</span></p>
      <div className='grid lg:grid-cols-3 gap-4 mt-4'>
        {
          card.map((item, index) => <Package
            key={index}
            name={item.name}
            date={item.date}
            course={item.course}
            enrole={item.enrole}
            amount={item.amount}
          ></Package>)
        }

      </div>

      <p className='text-tutePrimary text-base font-medium my-4'>Terms & Conditions</p>

    </div>
  );
};

export default Home;