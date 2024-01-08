import React from 'react';
import router from 'router/router';
import { Routes, Route } from 'react-router-dom';
import Preloader from 'components/Ui/Preloader/Preloader';

const MainRouter: React.FC = () => {
    return (
        <>
            <React.Suspense fallback={<Preloader />}>
                <Routes>
                {
                    router.map(route => <Route key={route.key} path={route.path} element={route.component} />) 
                }
                </Routes>
            </React.Suspense>
        </>
    );
}

export default React.memo(MainRouter);