import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, Housing, About, Error } from '@/pages';

export default function Router () {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path='/home' element={<Home />} />
                    <Route path='/housing/:id' element={<Housing />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/404' element={<Error />} />

                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </div>
    );
};

 