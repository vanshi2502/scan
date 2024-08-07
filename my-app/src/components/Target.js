import React ,{useState}from 'react'

export default function Target() {
   {
    const[select,setSelects]=useState();
    
    const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interest, setInterest] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const[value,setValue]=useState(false);
  
  const handleIncrement=()=>{
    setValue(value+1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Phone Number:', phoneNumber);
    console.log('Interest:', interest);
    console.log('Radio Value:', radioValue);
  };
    
    return (
    <>
     <div className=''>
     
     <div  className="container-fluid p-2 max-w-sm mx-auto flex mt-4 text-blue-400 mr-0 space-x-4 ml-56 content-end">
     <div  className="gap-x-96 'shadow-gray-400 shadow-lg p-0.5 rounded-md  mr-0">
      <h1>{select}</h1>
       <select value={select} onClick={e=>setSelects(e.target.value)}>
        
        <option>Export</option>
        <option>2</option>
        <option>3</option>

       </select>
      </div>
     
    <a  className="navbar-brand" href="/">
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvHLjbGg8v_oghfFTSAbKeAMsfVnCd_IgIdzOZnZAJMrwVOcuY" alt="Logo" width="20" height="29"  className=" d-inline-block align-text-top"/>
    </a>
    <div  className='text-black ml-0'>Target</div>
    
    <div className="bg-blue-100 text-center ml-0 text-base gap-x-8 shadow-gray-400 shadow-lg p-0.5 rounded-md  hover:bg-red-600 hover:text-black">
        <button onClick={() => setShowForm(true)}>+Target</button>
       
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="bg-slate-50">
            <h1 className='mt-4'>Fill Up The Details</h1>
            <label className='mt-4'>
              
              <input type="text"
                className="form-control pd-2"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <h1 className='mt-4'>SCOPE</h1>
            <div className="bg-slate-100 mt-4 shadow-lg pd-3 text-center ml-0 text-base gap-x-4 rounded-xl hover:bg-blue-600 hover:text-black">
              <button>+ Add Domain</button>
            </div>
            <div className="bg-slate-100 mt-4 shadow-lg pd-3 text-center ml-0 text-base gap-x-4 rounded-xl hover:bg-blue-600 hover:text-black">
              <button type="button" onClick={handleIncrement}>+ Add subdomain</button>
            </div>
            <div className=" flex flex-row mt-4 ">
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="Server"
                  checked={radioValue === 'Server'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                Server
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="Web Apps"
                  checked={radioValue === 'Web Apps'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                Web Apps
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="Mobile Apps"
                  checked={radioValue === 'Mobile Apps'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                Mobile Apps
              </label>
              <br />
              </div>
              <h1 className='mt-4'>Cloud</h1>
              <div className="flex flex-row">
              <div className="flex flex-row">
              <label className="flex-row">
                <input
                  type="radio"
                  name="myRadio"
                  value="option 1"
                  checked={radioValue === 'Option 1'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png" height="40"width="40"/>
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="Option 2"
                  checked={radioValue === 'Option 2'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <img src="https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png" height="60" width="60"/>
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="Option 3"
                  checked={radioValue === 'Option 3'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <img src="https://logowik.com/content/uploads/images/alibaba-cloud3970.jpg" height="50" width="50"/>
              </label>
              <label>
              <input
                  type="radio"
                  name="myRadio"
                  value="Option 3"
                  checked={radioValue === 'Option 3'}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/ibm_cloud_logo_icon_169999.png" height="50" width="60"/>
              </label>
            </div>
            </div>
            <button className="bg-sky-500 hover:bg-sky-700" type="submit">Submit</button>
            </div>
          </form>
          
        )}
      </div>
  


      
        </div>
        
      </div>
      </>
  );
}
}
