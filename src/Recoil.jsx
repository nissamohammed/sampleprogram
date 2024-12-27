import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { textState } from './atom';

function Recoil() {
    const first = useRecoilValue(textState);

    // Recoil2 Component
   

    // Recoil Component
useEffect(() => {
    console.log("first:", first);
}, [first]);

return (
    <div>{first ? "nissa" : "recoila"}</div>
);


}

export default Recoil;
