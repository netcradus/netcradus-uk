import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Acis from './pages/Acis';
import Services from './pages/Services';
import ManagedSoc from './pages/ManagedSoc';
import CloudSecurity from './pages/CloudSecurity';
import ZeroTrust from './pages/ZeroTrust';
import Vapt from './pages/Vapt';
import IncidentResponse from './pages/IncidentResponse';
import Compliance from './pages/Compliance';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import WhyNetcradus from './pages/WhyNetcradus';
import CyrixXdr from './pages/CyrixXdr';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acis" element={<Acis />} />
          <Route path="services" element={<Services />} />
          <Route path="managed-soc" element={<ManagedSoc />} />
          <Route path="cloud-security" element={<CloudSecurity />} />
          <Route path="zero-trust" element={<ZeroTrust />} />
          <Route path="vapt" element={<Vapt />} />
          <Route path="incident-response" element={<IncidentResponse />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="industries" element={<Industries />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="why-netcradus" element={<WhyNetcradus />} />
          <Route path="cyrix-xdr" element={<CyrixXdr />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
