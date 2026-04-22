import React from 'react';

const AirDuctnew = () => {
  // --- INLINE STYLES ---
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#2c3e50',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      lineHeight: '1.7',
    },
    heroSection: {
      textAlign: 'center',
      padding: '40px 0',
      borderBottom: '4px solid #004a99',
      marginBottom: '40px',
    },
    title: {
      fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
      color: '#004a99',
      margin: '0 0 10px 0',
      fontWeight: 800,
    },
    flexGroup: {
      display: 'flex',
      flexWrap: 'wrap', // Responsive wrapping for mobile
      gap: '40px',
      alignItems: 'center',
      marginBottom: '60px',
    },
    textContent: {
      flex: '1 1 500px', // Stacks when width is less than 500px
    },
    imageContent: {
      flex: '1 1 400px',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    responsiveImg: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    heading2: {
      fontSize: '2rem',
      color: '#004a99',
      marginBottom: '20px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      padding: '8px 0',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.1rem',
    },
    icon: {
      color: '#004a99',
      marginRight: '12px',
      fontWeight: 'bold',
    },
    benefitsBox: {
      backgroundColor: '#f0f7ff',
      padding: '30px',
      borderRadius: '12px',
      borderLeft: '6px solid #28a745',
      marginTop: '30px',
    },
    checkMark: {
      color: '#28a745',
      marginRight: '10px',
      fontSize: '1.2rem',
    },
    locationTag: {
      display: 'inline-block',
      backgroundColor: '#eef4ff',
      color: '#004a99',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '10px'
    }
  };

  return (
    <div style={styles.container}>
      {/* HEADER SECTION */}
      <header style={styles.heroSection}>
        <div style={styles.locationTag}>Serving Central Texas Since 2024</div>
        <h2 style={styles.title}>
          Air Duct Cleaning in Killeen, TX | Killeen Air Duct Cleaners
        </h2>
      </header>

      {/* INTRO SECTION */}
      <section style={styles.flexGroup}>
        <div style={styles.textContent}>
          <p>
            <strong>Killeen Air Duct Cleaners</strong> proudly provides professional 
            air duct cleaning, HVAC cleaning, dryer vent cleaning, chimney sweep, 
            duct replacement, and attic insulation services in <strong>Killeen, TX</strong>.
          </p>
          <p>
            With Central Texas heat and year-round air conditioning use, homes in Killeen 
            experience heavy dust buildup, allergens, and airflow issues. Our experienced 
            technicians help homeowners improve indoor air quality, lower energy bills, 
            and extend HVAC system life.
          </p>
          <p>
            Whether you live near <strong>Fort Cavazos</strong>, in older neighborhoods off 
            <strong>Rancier Avenue</strong>, or in newer developments throughout Killeen, 
            we provide reliable and affordable service tailored to local homes.
          </p>
        </div>
        <div style={styles.imageContent}>
          {/* Replace this URL with your actual image */}
          <img 
            src="myman.jpeg" 
            alt="Air Duct Cleaning Killeen TX" 
            style={styles.responsiveImg}
          />
        </div>
      </section>

      <hr style={{ border: '0', height: '1px', background: '#eee', margin: '40px 0' }} />

      {/* DETAILED SERVICE SECTION */}
      <section style={{ ...styles.flexGroup, flexDirection: 'row-reverse' }}>
        <div style={styles.textContent}>
          <h2 style={styles.heading2}>Air Duct Cleaning in Killeen, TX</h2>
          <p>
            Over time, dust, pet dander, pollen, and debris collect inside your duct system. 
            In Killeen’s dry and windy conditions, this buildup happens faster than most 
            homeowners realize.
          </p>

          <h3 style={{ color: '#34495e', marginBottom: '15px' }}>
            Our professional air duct cleaning service includes:
          </h3>
          <ul style={styles.list}>
            {['Complete supply and return vent cleaning', 'High-powered vacuum extraction', 'Removal of dust, allergens, and debris', 'Airflow improvement inspection'].map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.icon}>→</span> {item}
              </li>
            ))}
          </ul>

          <div style={styles.benefitsBox}>
            <h3 style={{ marginTop: 0, color: '#155724' }}>Benefits of duct cleaning:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {[
                'Cleaner indoor air',
                'Reduced allergy symptoms',
                'Better HVAC performance',
                'Lower monthly energy bills'
              ].map((benefit, index) => (
                <div key={index} style={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <span style={styles.checkMark}>✔</span> {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.imageContent}>
          {/* Replace this URL with your actual image */}
          <img 
            src="profile3.jpeg" 
            alt="Professional Duct Cleaning" 
            style={styles.responsiveImg}
          />
        </div>
      </section>
    </div>
  );
};

export default AirDuctnew;