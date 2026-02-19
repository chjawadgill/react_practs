import React from 'react';

let Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; {new Date().getFullYear()} My E-Commerce Website. All rights reserved.</p>
                <ul style={styles.links}>
                    <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
                    <li><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
                    <li><a href="/contact-us" style={styles.link}>Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    links: {
        listStyle: 'none',
        padding: 0,
        margin: '10px 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Footer;