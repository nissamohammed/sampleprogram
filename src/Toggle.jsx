import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
function Toggle() {
    const [test, setTest] = useState(false)
    const handleSwitch=()=>{
        !test? setTest(true):setTest(false);
       }
  return (
    <>
          <div className='text-center mt-5'>
              {!test ? <>
                  <FontAwesomeIcon icon={faLightbulb} size='10x' className='mb-2' />
              </>
                  :
                  <>
                      <FontAwesomeIcon icon={faLightbulb} style={{ color: "#dbae0a", }} size='10x' className='mb-2' />
                  </>
              }
              <br />
              <button className={!test ? 'mr-1 border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5' : 'mr-1 border-2 border-green-700 bg-green-700 text-white py-1 px-5'}
                  onClick={handleSwitch}>
                  {!test ? 'ON' : 'OFF'}
              </button>
          </div>
          
    </>
  )
}

export default Toggle