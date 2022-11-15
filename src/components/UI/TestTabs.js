import { useState } from "react";
import Tabs from './Tabs';

const Test = () => {
    const [list, setList] = useState([{label:'Tab1', content: 'Tab1...'}, {label:'Tab2', content: 'Tab2...'}, {label:'Tab3', content: 'Tab3...'}, {label:'Tab4', content: 'Tab4...'}]);
    return (
        <Tabs>
            {
                list.map(
                    item => 
                        (<div key={item.label} label={item.label}>
                            {item.content}
                        </div>)
                    )
            }
        </Tabs>
    )
}

export default Test;