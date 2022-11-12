import React from 'react';
import Breadcum from '../Breadcum/Breadcum';
import Package from '../Package/Package';

const Home = () => {
  return (
    <div className='lg:mx-52 mx-10 lg:mt-0 mt-4'>
      <Breadcum></Breadcum>
      <div className='flex justify-between'>
        <div>
          <h3 className='font-semibold	text-2xl text-tutePrimary'>Your Referral Code </h3>
          <div className='rounded bg-gradient-to-r mt-[20px] p-[2px] from-[#800080] to-[#FF864C]'>
            <div className='bg-white rounded p-[15px]'>
              <p className='font-medium text-xl text-tutePrimary tracking-code text-center'>EDCH54</p>
            </div>
          </div>
        </div>

        <div>
          <p className='title'>Wallet Balance</p>
          <h3 className='amount'>₹ 500</h3>
        </div>

      </div>

      <div className='grid lg:grid-cols-3 gap-4'>
        <Package></Package>
      </div>

    </div>
  );
};

export default Home;