
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Home from "./components/Home";
import EditUser from "./components/EditUser";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children : [
      {
        path: "/all",
        element: <AllUser/>
      },
      {
        path: "/add",
        element: <AddUser/>
      },
      {
       path:"/",
       element: <Home/>
      },
      {
        path: "/edit/:id",
        element: <EditUser/>
      }
    ]
  },

])

function App() {
  return (
    <>
    <div>
  <RouterProvider router={appRouter} />
    </div>
    </>
    
  );
}

export default App;
