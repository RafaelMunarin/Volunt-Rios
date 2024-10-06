import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { styles } from './styles';

const Header = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username'); 

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <header style={styles.header}>
            <div style={styles.backButtonContainer}>
                <button style={styles.backButton} onClick={handleBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <h1 style={styles.title}>VoluntáRIO</h1>
            <nav style={styles.nav}>
                <span style={styles.greeting}>
                    Olá, <span style={styles.username}>{username}</span>
                    <div style={styles.userIcon} />
                </span>
            </nav>
            <div style={styles.navLinks}>
                <button style={styles.button} onClick={() => navigate('/expeditions')}>
                    Expedições
                </button>
                <button style={styles.button} onClick={() => navigate('/forum')}>
                    Fórum
                </button>
                <button style={styles.button} onClick={() => navigate('/partners')}>
                    Parceiros
                </button>
            </div>
        </header>
    );
};

export default Header;
