import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from './servicesData';
import Gallery from './Gallery';
import Seo from './components/Seo';
const ServicePage = () => {
  const { serviceSlug } = useParams();
  const data = servicesData[serviceSlug];

  if (!data) return <div style={{padding: '100px', textAlign: 'center'}}>Service Not Found</div>;

  const styles = {
    wrapper: { backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: '"Segoe UI", sans-serif' },
    container: { maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' },
    header: { backgroundColor: '#003366', color: 'white', padding: '80px 20px', textAlign: 'center' },
    contentBox: { backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '-60px' },
    listSection: { backgroundColor: '#eef6ff', padding: '30px', borderRadius: '15px', margin: '30px 0', borderLeft: '6px solid #0056b3' },
    cta: { backgroundColor: '#003366', color: 'white', padding: '50px', borderRadius: '25px', textAlign: 'center', marginTop: '50px' },
    faqSection: { marginTop: '50px' },
    faqItem: { backgroundColor: 'white', padding: '20px', borderRadius: '12px', marginBottom: '15px', borderLeft: '4px solid #00d2ff' }
  };

  return (
    <div style={styles.wrapper}>
      <Seo
        title={data?.title}
        description={data?.intro}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <header style={styles.header}>
        <h1 style={{fontSize: '2.5rem'}}>{data.title}</h1>
      </header>

      <div style={styles.container}>
        <div style={styles.contentBox}>
          <p style={{fontSize: '1.2rem', color: '#444'}}>{data.intro}</p>

          <div style={styles.listSection}>
            <h3 style={{color: '#003366', marginTop: 0}}>{data.subTitle}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {data.points.map((p, i) => (
                <li key={i} style={{marginBottom: '10px', display: 'flex', gap: '10px'}}>
                  <span style={{color: '#0056b3', fontWeight: 'bold'}}>✔</span> {p}
                </li>
              ))}
            </ul>
          </div>

          <p style={{fontSize: '1.1rem', color: '#444'}}>{data.outro}</p>
        </div>
  <Gallery/>
        {/* --- Why Choose Us --- */}
        <div style={{...styles.contentBox, marginTop: '40px', textAlign: 'center'}}>
          <h2 style={{color: '#003366'}}>Why Choose Killeen Air Duct Cleaners?</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
            {['Locally Owned', 'Texas Climate Experts', 'Professional Equipment', 'Transparent Pricing'].map(t => (
              <span key={t} style={{padding: '10px 20px', background: '#f0f0f0', borderRadius: '50px', fontWeight: 'bold'}}>{t}</span>
            ))}
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div style={styles.faqSection}>
          <h2 style={{textAlign: 'center', color: '#003366'}}>Frequently Asked Questions</h2>
          <div style={styles.faqItem}>
            <p><strong>How often should air ducts be cleaned in Killeen?</strong></p>
            <p>Every 2–3 years, depending on usage and dust exposure.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>Is HVAC cleaning different from duct cleaning?</strong></p>
            <p>Yes. HVAC cleaning includes internal mechanical components.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>Does insulation reduce summer cooling costs?</strong></p>
            <p>Proper insulation significantly lowers heat transfer and reduces energy usage.</p>
          </div>
        </div>

        {/* --- CTA --- */}
        <div style={styles.cta}>
          <h2>Ready for Cleaner Air?</h2>
          <p>Contact Killeen's top-rated specialists today.</p>
          <button style={{padding: '15px 40px', fontSize: '1.2rem', background: '#ffce00', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer'}}>
            Call Now: (254) 998 3484
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;