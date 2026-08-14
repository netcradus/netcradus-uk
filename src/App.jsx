import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Acis from './pages/Acis';
import Platform from './pages/Platform';
import { Navigate } from 'react-router-dom';
import Products from './pages/Products';
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
import EndpointDetection from './pages/EndpointDetection';
import Siem from './pages/Siem';
import Soar from './pages/Soar';
import Cti from './pages/Cti';
import Pam from './pages/Pam';
import Grc from './pages/Grc';
import AiSecurity from './pages/AiSecurity';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/acis" element={<Acis />} />
          <Route path="acis" element={<Navigate to="/products/acis" replace />} />
          <Route path="platform" element={<Platform />} />
          <Route path="platform/endpoint-detection" element={<EndpointDetection />} />
          <Route path="platform/xdr" element={<EndpointDetection />} />
          <Route path="platform/siem" element={<Siem />} />
          <Route path="platform/soar" element={<Soar />} />
          <Route path="platform/cti" element={<Cti />} />
          <Route path="platform/pam" element={<Pam />} />
          <Route path="platform/grc" element={<Grc />} />
          <Route path="platform/ai-security" element={<AiSecurity />} />
          <Route path="products/xdr" element={<EndpointDetection />} />
          <Route path="products/siem" element={<Siem />} />
          <Route path="products/soar" element={<Soar />} />
          <Route path="products/cti" element={<Cti />} />
          <Route path="products/pam" element={<Pam />} />
          <Route path="products/grc" element={<Grc />} />
          <Route path="products/ai-security" element={<AiSecurity />} />
          <Route path="products" element={<Products />} />
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
