import './App.css';
import {Routes, Route} from 'react-router-dom';
import { routes } from './router';
/* import { fetchPosts } from "@/store/slice/ActionCreators";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store'; */

function App() {
    //const dispatch = useDispatch<AppDispatch>();
/* 
    useEffect(() => {
        //console.log('fsdf')
        dispatch(fetchPosts());
    }, []); */

  return (
    <>
        <Routes>
            {
                routes.map(route => 
                    <Route 
                        path={route.path} 
                        element={<route.element/>} 
                        key={route.path}
                    />
                )
            }
        </Routes> 
    </>
  )
}

export default App
