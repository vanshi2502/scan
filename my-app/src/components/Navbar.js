import React,{useState} from 'react'

export default function Navbar(props) {
   {
    const[state,subState]=useState(false);
    const onClick=()=>{
      subState(!state)
    }
   
    return (  
        <>
        
        
    <div  className="bg-white shadow-2xl mt-6 ml-4 mr-4 mb-4">
    <nav  className="navbar bg-body-tertiary mt-4 ml-4 mr-8">
<div  className="p-2 flex-initial  flex items-center ml-0  space-x-4  ">

    <div className=' mt-6 h-full max-h-40 w-10 ml-4'>
        <img className=""  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsL8Tvb87rvhRwO_iD3au6wsTKZtI7KqaxgA&s" width="60" height="100"/>

    </div>
    <div className='mt-4 ml-4 mr-4  flex-item-center'>
      Codesnag
            <p  className="text-slate-500  text-xs text-nowrap ">YOUR CYBER GUARDIAN</p>
        </div>
        </div>       
  <div  className="container-fluid p-2 max-w-sm mx-auto ml-0  mt-8 flex text-xs space-x-4   hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://i.pinimg.com/564x/34/43/14/34431449feeb9664ea6481d7ea5dacd5.jpg" alt="Logo" width="20" height="25"/>
    </a>
    <div>Stats</div>
  </div>
  <div  className="container-fluid p-2 max-w-sm mx-auto  flex ml-0  text-xs space-x-4 bg-blue-200 rounded-md hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW3Zhyg0Sny4N7rcN2-mxc81ToYrfbi6ONFeR7nuqNQKjox1vg" alt="Logo" width="20" height="10"  />
    </a>
    <div>Scans</div>
  </div>
  <div  className="container-fluid p-2 max-w-sm mx-auto text-xs flex ml-0 space-x-4  hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Square_with_dots.svg/480px-Square_with_dots.svg.png" alt="Logo" width="20" height="40"  />
    </a>
    <div>Endpoints</div>
  </div>
  <div  className="container-fluid p-2 max-w-sm mx-auto text-xs flex ml-0 space-x-4  hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrHP7s-15-iOxFDK7KuxAxrqzWBphdUGo4PmUDbZwCuwWVeVqE" alt="Logo" width="20" height="25"/>
    </a>
    <div>AI Guard</div>
  </div>
  <div  className="container-fluid p-2 max-w-sm mx-auto text-xs text-nowrap flex ml-0 space-x-4  hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXhzmk0XunmWS17l_9WukEVAiJkpjvwB5u0VDhWz70RQOc-n6L" alt="Logo" width="20" height="25"/>
    </a>
    <div>Incident Response</div>
  </div>
  <div  className="container-fluid p-2 max-w-sm mx-auto text-xs flex ml-0 space-x-4  hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAUU_BaOvWijLiNoqPuoEwT8r8Nr-Qbpxqx5TD0uzJWRLdkwZx" alt="Logo" width="20" height="25"/>
    </a>
    <div>GRC</div>
  </div>
  <div  className="container-fluid p-2 max-w-sm mx-auto text-xs flex ml-0 space-x-4  hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-1 d-inline-block align-text-top" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSm1P4L6pvvk7NyUvej61P5m6r5dxFIR0sn1d6lwUFprk--fNf_" alt="Logo" width="20" height="20"/>
    </a>
    <div>HR Audit</div>
    </div>
    <div className=' container-fluid p-2 max-w-sm mx-auto text-center flex-col ml-0 '>
    <div  className="container-fluid rounded-md bg-red-700 p-2 max-w-sm mx-auto mt-56 shadow-lg flex ml-0 space-x-4  hover:bg-blue-200 hover:text-black">
    <a  className="navbar-brand" href="/">
      <img className="ml-4" src="https://media.istockphoto.com/id/182787482/photo/flammable-sign.jpg?s=612x612&w=0&k=20&c=8kpWUYcadCxTt0Fn5P9OtDos1m3FiOwjXRsEeD5MXTI=" height="20" width="20"/>
   
    </a>
    <div className='text-nowrap'>Report Incident</div>
    </div>
      <div className='flex-row  bg-slate-100 shadow-lg '> 
    <button className="bg-slate-50 p-1 text-center   ml-0 text-base  rounded-xl hover:bg-blue-300  hover:text-black" >Logout</button>
    
   
  </div>
  </div>
  

</nav>
</div>


        </>
      
    )
  }
}


