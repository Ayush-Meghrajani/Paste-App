import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {Tocreate, Toupdate} from '../pasteSlice'
import NavBar from './NavBar';


const Home = () => {

  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  // const [searchParams,setSearchParams] = useSearchParams();
  // const pasteIdex = searchParams.get("/:pasteId");
  const { pasteId } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();




function pasteCreation() {
  const paste = {
    title: { title },
    Content: { value },
    pasteId: pasteId || crypto.randomUUID(), 
  };

  if (pasteId) {
    dispatch(Toupdate(paste)); 
  } else {
    dispatch(Tocreate(paste)); 
  }

  setTitle('');
  setValue('');
}


   useEffect(() => {
  if (pasteId && allPastes.length > 0) {
    const foundPaste = allPastes.find(p => p.pasteId === pasteId);
    if (foundPaste) {
      setTitle(foundPaste.title.title);
      setValue(foundPaste.Content.value);
    }
  }
}, [pasteId, allPastes]);


  function Verify(){
    if(pasteId){
      return "Update My paste";
    }
    else{
      return "Create My Paste"
    }
  }



  


  return (
    <div>
      <NavBar />
   <div className='flex flex-row gap-8'>
     <input 
    className='bg-black mt-[2rem] min-w-[300px] rounded-2xl p-1 pl-2.5 flex '
    type="text"
    placeholder='Enter the Title here'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />

    
   </div>

    <div
    className='flex place-content-center'
    >
    <textarea 
    className='mt-8 bg-black min-w-[350px] rounded-2xl p-1 pl-2.5 min-h-[300px]'
    value={value}
    
    rows={17}
    placeholder='Enter your Content here'
    onChange={(e) => setValue(e.target.value)}
    >

    </textarea>
    </div>

    <div className='mt-4'>
      <button
      onClick={pasteCreation}
      >
       {Verify()}
      </button>
    </div>
    </div>
  )
}

export default Home