import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Edit } from '../pages/Edit';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/edit' element={<Edit/>}/>
        </Routes>
    )
}