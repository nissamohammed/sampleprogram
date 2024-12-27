import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './atom';

function Recoil2() {
    const [second, setsecond] = useRecoilState(textState);

     useEffect(() => {
            console.log("Updated state:", second);
        }, [second]);
    
        return (
            <button onClick={() => {
                setsecond(second+1);
            }}>btn</button>
        );
}

export default Recoil2;
