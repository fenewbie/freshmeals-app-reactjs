import { motion } from 'framer-motion';

const BannerSlideItem = ({ imgItem }) => {
  return (
    <>
      <img
        src={imgItem['image-slide']}
        className='block w-full h-full sm:object-cover md:object-cover object-none m-0'
        alt={imgItem.subtitle}
      />
      <div className='bg-slate-900 bg-opacity-60 absolute w-full h-full top-0 left-0 text-white'>
        <motion.div
          animate={{ top: '50%' }}
          // transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
          className={`absolute p-8 space-y-6 top-1/3 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ${
            imgItem.id % 2 === 0 ? 'md:left-14 lg:left-14' : 'md:right-14 lg:right-14'
          }`}>
          <h6 className='font-bold text-lg'>{imgItem.subtitle}</h6>
          <h1 className='font-bold text-4xl'>{imgItem.title}</h1>
          <div className='border-l-2 border-opacity-30 pl-8 '>
            <p>{imgItem.desc}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BannerSlideItem;
