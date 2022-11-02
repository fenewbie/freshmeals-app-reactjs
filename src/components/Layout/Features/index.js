import FeatureItem from './FeatureItem';
import db from '../../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';

const iconSize = '2em';

const Features = () => {
  const [featureItems, setFeatureItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resp = await getDocs(collection(db, 'features'));
      setFeatureItems(resp.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getData();
    console.table(featureItems);
  }, []);
  return (
    <div className='relative px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8 w-full before:z-0 before:contents-[""] before:w-full before:h-1/2 before:absolute before:left-0 before:bottom-0 before:bg-[#f7f5eb]'>
      <div
        className={`relative z-10 h-auto bg-white grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 shadow-lg shadow-gray-300 mx-auto rounded-3xl border border-gray-200`}>
        {featureItems.map(item => (
          <FeatureItem
            key={item.id}
            title={item.title}
            describe={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
