import { useState, useRef } from 'react';

export default function Scan() {
  const [show, setShow] = useState(true);
  const[click,setClick]=useState(true);
  const ref = useRef(null);
  const rev=useRef(null);
  return (
    <div className='md:flex flex-row flex-shrink ml-4 m-2 text-nowrap mt-4'>
     
    <div className="bg-grey-50  shadow-lg p-2  text-center  px-60 ml-0 text-grey-100   rounded-xl hover:bg-blue-500  hover:text-black">
      <button
        onClick={() => {
          setShow(!show);
        }}>
        AI SCAN
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        
      </button>
      {show && <p ref={ref}>AI Scan covers network and Webcam</p>}
    </div>
    <div className="bg-grey-50 shadow-lg p-2  text-center px-60 ml-0 text-base mr-4 rounded-xl hover:bg-orange-500  hover:text-black">
      <button
        onClick={() => {
          setClick(!click);
        }}>
          
        Deep Scan
      </button>
      <button
        onClick={() => {
          rev.current.remove();
        }}>
        
      </button>
      {click && <p rev={rev}>Advance Scan + Red team Exercises
      </p>}
    </div>
    </div>

  );
}
