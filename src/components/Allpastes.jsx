import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDelete, ToReset, Toupdate } from "../pasteSlice";

import {
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { toast } from "react-toastify";
import ViewPaste from "./ViewPaste";

const Allpastes = () => {
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pasteId } = useParams();

  function handleDelete(pasteId) {
    dispatch(ToDelete(pasteId));
  }

  function handleEdit(pasteId) {
    navigate(`/pastes/${pasteId}`);
    dispatch(Toupdate(pasteId));
    // console.log(pasteId);
  }

  const [searchTerm,setSearchTerm] = useState('');

  const filteredData = allPastes.filter(
    (paste) => paste.title.title.toLowerCase().includes
    (searchTerm.toLowerCase()) 
  );



  return (
    <div>

    <div>
      <input 
    className='bg-black mt-[2rem] min-w-[300px] rounded-2xl p-1 pl-2.5 flex '
    type="text"
    placeholder='Search'
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>

      <div>
        {filteredData.map((paste, index) => (
          <div
            key={index}
            className="min-w-[550px] bg-black flex flex-col mt-12 min-h-[80px] rounded-2xl"
          >


            <div className="flex flex-row place-content-between">
              <p className="font-extrabold text-2xl mt-1.5  flex items-start ml-4">
                {paste.title.title}
              </p>

              <div className="flex gap-4 mr-2">
                <input
                  type="button"
                  value="Edit"
                  className="cursor-pointer  p-0.5"
                  onClick={() => handleEdit(paste.pasteId)}
                />

                <input
                  type="button"
                  value="Delete"
                  className="cursor-pointer"
                  onClick={() => handleDelete(paste.pasteId)}
                />

                <input type="button" value="View" className="cursor-pointer" onClick={() => navigate(`/pastes/${paste.pasteId}/view`)} />

                <input
                  type="button"
                  value="Copy"
                  className="cursor-pointer "
                  onClick={() => {
                    navigator.clipboard.writeText(paste.Content.value);
                    toast.success("Copied");
                  }}
                />
              </div>
            </div>

            <p className="self-start mt-2.5 flex items-start ml-4 overflow-hidden">
              {paste.Content.value}
            </p>
          </div>
        ))}
      </div>

      <button
        className="mt-4"
        onClick={() => {
          localStorage.clear();
          dispatch(ToReset());
        }}
      >
        Delete All
      </button>
    </div>
  );
};

export default Allpastes;
