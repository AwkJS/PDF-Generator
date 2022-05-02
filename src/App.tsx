import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageRoutes from './routes';

const App: React.FC = () => (
    <>
        <Router>
            <PageRoutes />
        </Router>
    </>
);

export default App;