import { useEffect, useState } from "react";

const Tabs = ({children}) => {
    const [tabActive, setTabActive] = useState();
    
    useEffect(() => {
        console.log('use effect');
        const {label} = children[0].props;
        setTabActive(label);
    }, [children]);


    return (
        <div>
            {
                children.map(child => {
                    const {label} = child.props;
                    return (
                        <button 
                            key={label} 
                            className={`px-4 py-2 bg-red-400 mx-2 ${label === tabActive ? 'text-cyan-600': 'opacity-30'}`}
                            onClick={() => setTabActive(label)}
                        >
                            {label}
                        </button>
                    )
                })
            }
            <div className="border-2 border-greenBtn min-h-[200px]">
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