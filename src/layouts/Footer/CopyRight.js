const CopyRight = () => {
  return (
    <div className='h-36 lg:h-24 xl:h24 w-full bg-slate-900'>
      <div className='h-full py-8 px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center text-white mx-auto'>
        <p className=''>All Rights Reserved @ Company 2022</p>
        <ul className='flex space-x-4 font-semibold text-center justify-center'>
          <li>Terms & Conditions</li>
          <li>Claim</li>
          <li>Privacy & Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default CopyRight;
