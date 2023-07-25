import React from 'react';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./pages/navbar/NavBar";
import Transaction from './pages/transaction/Transaction';
import SignIn from './pages/signin/SignIn';
import SignOut from './pages/signout/SignOut';
import ExampleGrid from './pages/exampleGrid/ExampleGrid';
import DymanicForm from './pages/dymanicForm/DymanicForm';
import SearchCard from './pages/searchCard/SearchCard';
import SearchCard1 from './pages/searchCard1/SearchCard1';
import Chart from './pages/chart/Chart';
import SalesChart from './pages/salesChart/SalesChart';
import Joint from './pages/joint/Joint';
import DynamicButton from './pages/dynamicButton/DynamicButton';

function App() {


  const Layout = () => {
    return (
      <div className="app">
   
          <Navbar />
          <Outlet />
 
   
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ExampleGrid />,
        },
        {
          path: "/exampleGrid",
          element: <ExampleGrid />,
        },
        {
          path: "/transaction",
          element: <Transaction />,
        },


         {
          path: "/welding",
          element: <Joint />,
        }, 
        
     
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signOut",
          element: <SignOut />,
        },

  

        {
          path: "/searchCard",
          element: <SearchCard />
        }, 

        {
          path: "/searchCard1",
          element: <SearchCard1 />
        }, 


        {
          path: "/chart",
          element: <Chart />
        }, 


        {
          path: "/salechart",
          element: <SalesChart />
        }, 

        {
          path: "/dymanicForm",
          element: <DymanicForm />
        }, 
        {
          path: "/dymanicButton",
          element: <DynamicButton />
        }, 

     
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;