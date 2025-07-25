import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "pastess",
  initialState,
  reducers: {
    Tocreate: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Created");
    },

    Toupdate: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(p => p.pasteId === updatedPaste.pasteId);
      if(index !== -1){
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
      }
      // toast.success("Updated");
    },

    ToReset: (state, action) => {
      state.pastes = [];
      toast.success("All Pastes Deleted!");
    },

     ToDelete: (state, action) => {
      
        const pasteId = action.payload;
        const index = state.pastes.findIndex((item) => item.pasteId === pasteId);
        if(index >= 0){
          state.pastes.splice(index,1);
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
        }
        toast.success("Deleted")
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  Tocreate,
  ToReset,
  Toupdate,
  ToDelete
} = pasteSlice.actions;

export default pasteSlice.reducer;
