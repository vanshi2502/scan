import React from 'react'

export default  function Severity() {
  {
    return (
        <>
      <div className=''>
        <div className='flex flex-row order-first container-fluid  p-2 ml-4 mr-64 mx-auto  shadow-gray-400   rounded-mdtext-nowrap mt-1 bg-white rounded-lg shadow-lg space-x-4'>
            <h1 className='font-bold'>Vulnerability Severity:</h1>
            <div className="flex flex-row space-x-4">
            <div className="w-6 h-6 bg-red-600 flex-row rounded-full space-x-4"></div> 
            <div className='ml-2'>Critical</div>
            </div >  
            <div className="flex flex-row space-x-4" >
            <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
           <div className='ml-2'> High</div></div>
            <div className="flex flex-row space-x-4">
            <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
            <div className='ml-2'>Medium</div></div>
            <div className="flex flex-row space-x-4 ">
            <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            <div className='ml-2'> Low</div></div>
            <div className="flex flex-row space-x-4">
            <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            <div className='ml-2'>Accepted</div></div>
            
            </div>
        </div>
      
      </>
    )
  }
}


