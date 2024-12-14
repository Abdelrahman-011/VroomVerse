import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Booking from './components/Booking/Booking.jsx';
import Payment from './components/Payment/Payment.jsx';
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';



function App() {



    useEffect(() => {
        initFlowbite();
    },[]);


    const Routes = createBrowserRouter([
        // Routes for the main layout
        {
            path: '',
            element: <LayOut />,
            children: [
                { path: "home", element:<ProtectedRoute><Home /></ProtectedRoute>  }, // Main components
                { path: 'booking', element: <ProtectedRoute><Booking /></ProtectedRoute>  },
                { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute>  },
                { path: 'payment', element: <ProtectedRoute><Payment /> </ProtectedRoute> },

                { path: '*', element: <NotFound /> }, // Not Found page
            ],
        },
        // Routes outside the main layout
        { index:true, element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
    ]);

    return (
        <>
            <RouterProvider router={Routes}></RouterProvider>
        </>
    );
}

export default App;
