const FeatureItem = ({ imgUrl, title, describe }) => {
  return (
    <div className='relative z-10 w-full h-auto pt-10 px-8 pb-4 flex items-center justify-center space-x-4 before:absolute before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:contents-[""] before:h-1/2 before:w-[1px] before:bg-gray-200'>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='space-y-3 pb-4'>
        <h4 className='font-bold'>{title}</h4>
        <p>{describe}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
