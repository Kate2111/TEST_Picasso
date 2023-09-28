import './App.css';
import {Routes, Route} from 'react-router-dom';
import { routes } from './router';


function App() {
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
