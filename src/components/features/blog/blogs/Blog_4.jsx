
const Blog_4 = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Page Under Construction</h2>
      <p style={styles.message}>We&apos;re working hard to get this page ready. Please check back later!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
  },
};

export default Blog_4;
