import React, {useEffect, useState} from 'react';

const useEffectDemo = () => {
    const [names, setNames] = useState({name: 'Aviral', familyName: 'Deepak'});
    useEffect(()=>{
        console.log('called');
        setNames({name: 'Tom', familyName: 'Harry'});
    }, []);
    return (
        <div>
            <p>Name: {names.name}</p>
            <p>Family Name: {names.familyName}</p>
        </div>
    )
} 

export default useEffectDemo;