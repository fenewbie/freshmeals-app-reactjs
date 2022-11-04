import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import * as cs from '../../../constants/Constant';

const Newsletter = () => {
  let [email, setEmail] = useState();

  return (
    <div className='w-full h-auto p-2 md:col-span-2 lg:col-span-2 xl:col-span-1'>
      <div className='w-full'>
        <h4 className='text-xl font-bold mb-6'>Newsletter</h4>
        <p className='mb-5'>Subscribe to our weekly Newsletter and receive updates via email.</p>
        <div className='w-full mb-6'>
          <form
            className='w-full flex'
            onSubmit={e => {
              e.preventDefault();
              console.log(email);
            }}>
            <input
              type='email'
              className='p-3 border border-gray-400 text-lg focus:ring-greenBtn xl:w-4/5 w-3/4'
              placeholder='Email'
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <button
              type='submit'
              className='bg-greenBtn p-4 grid place-content-center hover:opacity-75 xl:w-1/5 aspect-square'>
              <FiSend />
            </button>
          </form>
        </div>
      </div>
      <div className='w-full pb-14'>
        <h5 className='text-base font-bold mb-6'>We Accept</h5>
        <div className='w-2/3 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-2/3'>
          <img src={cs.paymentImg} alt='payment' />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
