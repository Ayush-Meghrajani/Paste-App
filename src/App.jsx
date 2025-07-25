import "./App.css";
import { createBrowserRouter, createHashRouter, Router, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Allpastes from "./components/Allpastes";
import ViewPaste from "./components/ViewPaste";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <div>
        
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <NavBar />
        <Allpastes />
      </div>
    ),
  },
  {
    path: "/pastes/:pasteId",
    element: (
      <div>
        
        <Home />
      </div>
    ),
  },
  {
     path: "/pastes/:pasteId/view",
    element: (
      <div>
        
        <ViewPaste />
      </div>
    ),
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
