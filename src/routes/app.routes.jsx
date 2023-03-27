import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Edit } from '../pages/Edit';
import { Create } from '../pages/Create';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/create' element={<Create/>}/>
        </Routes>
    )
}