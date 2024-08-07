
import './App.css';
import Navbar from './components/Navbar';
import Vunerability from './components/Vunerability';
import Target from './components/Target';
import Dropdown from './components/Dropdown';
import Severity from './components/Severity';
import Port from './components/Port';
import Scan from './components/Scan';
import Current from './components/Current';
import Last from './components/Last';
import Filter from './components/Filter';
function App() {
  return (
    <>
    
    < div className="flex bg-slate-50">
    <Navbar className="flex"/>
    <div className='flex flex-col'>
      <div className='flex '>
    
    <div className='flex flex-nowrap gap-x-4'>
      
    < Dropdown/>
    </div>
    <Target className=""/>
    
    </div>
    <Severity/>
    <div className='flex-col'>
    <Port/>
    <Scan/>
    </div>
    <div className='flex flex-nowrap gap-x-4'>
    <h1 className='p-2 mt-2 font-bold ml-4'>Vulnerabilities Report</h1>
    <div  className="gap-x-96 mr-0 ml-96"></div>
    <Filter/>
    </div>
    <Vunerability className="flex justify-center items-center h-screen p-20"/>
    <div className='bg-white rounded-sm shadow-lg ml-4 mb-4 mr-7 mt-2'>
    <div className='flex flex-nowrap gap-x-4 '>
    <h1 className='p-2 font-bold ml-4 text-nowrap mr-4 mt-2'>Current Vulnerabilities(Open)</h1>
    <div  className="gap-x-96 mr-0 ml-80"></div>
    <Filter/>
    </div>
    <div className=" flex-row">
    <Current className="p-5"/>
    <div className="flex flex-row  ml-4 mr-4 mt-4 mb-4 p-3 text-white rounded-lg bg-blue-700"><p className='ml-96 mr-8'>View details</p>
      </div>
    </div>
   </div> 
<div className='mt-4 '>
<Last/>
</div>
 
</div>
    </div>
    
   

    </>
  );
}

export default App;
