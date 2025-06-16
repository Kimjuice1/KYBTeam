// src/App.tsx

import React from 'react';
import Header from './Header';
import CertificateList from '@/pages/main/ui/CertificateList';
import Slider from './CertificateCategorySlider';
import Footer from './Footer';


const App: React.FC = () => {


    return (
        <div>
            <Header />
            <Slider />
            <CertificateList />
            <Footer/>
        </div>
    );
};
export default App;
