import React, { useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ViewPaste = () => {

    const {pasteId} = useParams();
    const allpastes = useSelector((state) => state.paste.pastes);
    const [title,setTitle] = useState('');
    const [value,setValue] = useState('');


useEffect(() => {
  if (pasteId && allpastes.length > 0) {
    const foundPaste = allpastes.find((paste) => paste.pasteId === pasteId);
    if (foundPaste) {
      setTitle(foundPaste.title.title);
      setValue(foundPaste.Content.value);
    }
  }
}, [pasteId, allpastes]);

    
  return (
    <div>

              <NavBar />
   <div className='flex flex-row gap-8'>
     <input 
    className='bg-black mt-[2rem] min-w-[300px] rounded-2xl p-1 pl-2.5 flex '
    type="text"
    placeholder='Enter the Title here'
    value={title}
    disabled
    />

    
   </div>

    <div
    className='flex place-content-center'
    >
    <textarea 
    className='mt-8 bg-black min-w-[350px] rounded-2xl p-1 pl-2.5 min-h-[300px]'
   
    
    rows={17}
    placeholder='Enter your Content here'
    value={value}
    disabled
    >

    </textarea>
    </div>


    </div>
  )
}

export default ViewPaste