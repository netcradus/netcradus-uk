import React from 'react';

export default function CyrixXdr() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag"><i className="fas fa-compress-arrows-alt"></i> UNIFIED RESPONSE</span>
          <h1 className="section-title">CYRIX XDR — Extended Detection. Unified Response.</h1>
          <p className="section-desc">Connect the signals. Understand the attack. Respond with precision.</p>
        </div>

        {/* XDR Layer Diagram */}
        <div className="flow-diagram-wrapper">
          <div className="xdr-layers-container">
            <div className="xdr-layer-box"><i className="fas fa-desktop"></i><br />ENDPOINT</div>
            <div className="xdr-layer-box"><i className="fas fa-network-wired"></i><br />NETWORK</div>
            <div className="xdr-layer-box"><i className="fas fa-cloud"></i><br />CLOUD</div>
            <div className="xdr-layer-box"><i className="fas fa-user-shield"></i><br />IDENTITY</div>
            <div className="xdr-layer-box"><i className="fas fa-envelope"></i><br />EMAIL</div>
            <div className="xdr-layer-box"><i className="fas fa-cubes"></i><br />APPLICATION</div>
          </div>
          
          <div style={{ textAlign: 'center', color: 'var(--pink)', fontSize: '1.8rem', margin: '1rem 0' }}>&darr;</div>

          <div style={{ background: 'rgba(255,45,120,0.15)', border: '1px solid var(--pink)', padding: '1.2rem', borderRadius: 'var(--radius-md)', textAlign: 'center', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>
            CYRIX XDR UNIFIED ENGINE
          </div>

          <div className="flow-steps-grid">
            <div className="flow-step-box"><div className="flow-step-name">DETECT</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">CORRELATE</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box"><div className="flow-step-name">INVESTIGATE</div></div>
            <div className="flow-arrow-icon">&rarr;</div>
            <div className="flow-step-box" style={{ borderColor: 'var(--pink)' }}><div className="flow-step-name">RESPOND</div></div>
          </div>
        </div>

        <div className="cards-grid-4" style={{ marginTop: '3rem' }}>
          <div className="card-item-3d"><h3 className="service-title">Unified Visibility</h3><p className="service-desc">One security view across your digital environment.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Cross-Domain Detection</h3><p className="service-desc">Correlate events across endpoint, network, cloud and identity.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Threat Correlation</h3><p className="service-desc">Reduce noise by connecting related security events.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Faster Investigation</h3><p className="service-desc">Give analysts the context needed to understand an attack.</p></div>
          <div className="card-item-3d"><h3 className="service-title">Response Automation</h3><p className="service-desc">Accelerate containment and remediation.</p></div>
        </div>
      </div>
    </section>
  );
}
