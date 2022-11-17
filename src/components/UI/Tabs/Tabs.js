import { useEffect, useState } from "react";

const Tabs = ({children}) => {
    const [tabActive, setTabActive] = useState();
    
    useEffect(() => {
        const {label} = children[0].props;
        setTabActive(label);
    }, [children]);

    // console.log(children);
    return (
        <div>
            <div className="flex justify-center flex-wrap">
                {
                    children.map((child, index) => {
                        const {label} = child.props;
                        return (
                            <div className="relative">
                                <button 
                                key={label} 
                                className={`text-sm md:text-lg font-bold uppercase px-6 py-4 my-1 mx-2 border-b-2 ${label === tabActive ? 'text-greenBtn border-greenBtn' :  'border-transparent' } hover:text-greenBtn`}
                                onClick={() => setTabActive(label)}
                                >
                                    {label}
                                </button>
                                {index !== children.length - 1  && <span className="absolute top-1/2 -right-[1px] -translate-y-1/2 h-4 w-[2px] bg-slate-300"></span>}
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="mt-10 min-h-[200px]">
                {
                    children.map(child => {
                        const {children, label} = child.props;
                        return <div key={label}>{label === tabActive && children}</div>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Tabs;