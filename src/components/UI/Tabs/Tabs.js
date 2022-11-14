import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// fake data
const tabs = [
    {id: 1, type: 'food & drinks', content: 'Food...'}, 
    {id: 2, type: 'vegetables', content: 'Vegetables...'}, 
    {id: 3, type: 'dried foods', content: 'Dried...'}, 
    {id:4, type: 'bread & cake', content: 'Bread...'}, 
    {id: 5, type: 'fish & meat', content: 'Fish....'}
];

const Tabs = () => {
    const [idTabActive, setIdTabActive] = useState(1);
    const [content, setContent] = useState('Write something here');

    useEffect(() => {
        setContent(() => {
            const [tab] = tabs.filter(tab => tab.id === idTabActive);
            return tab.content;
        })
    }, [idTabActive]);

    return (
        <div>
            <div className="flex justify-center flex-wrap">
                {tabs.map((tab) => (
                    <Link 
                        key={tab.id} to='/' 
                        className={`relative text-base md:text-lg uppercase font-bold px-6 md:px-8 py-4 mx-1 md:mx-3 border-b-2 transition-all duration-300  hover:text-greenBtn  
                        ${tab.id === idTabActive ? 'border-greenBtn text-greenBtn' : 'border-transparent'}`}
                        onClick={() => setIdTabActive(tab.id)}
                    >
                        {tab.id !== tabs.length && <span className="absolute top-1/2 right-[-6px] md:right-[-13px] w-[2px] h-1/4 -translate-y-1/2 bg-slate-300"></span>}

                        {tab.type}
                    </Link>
                        
                ))}
            </div>
            <div className="mt-20">
                {content}
            </div>
        </div>
    )
}

export default Tabs;