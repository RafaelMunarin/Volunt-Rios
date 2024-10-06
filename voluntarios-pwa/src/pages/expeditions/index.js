import React from 'react';
import Header from '../../components/header'; 
import { styles } from './styles';

const Expeditions = () => {
    return (
        <div style={{ ...styles.container, marginTop: '80px' }}> 
            <Header />
            <h2 style={styles.title}>Expedições Disponíveis</h2>
            <ul style={styles.list}>
                <li style={styles.item}>
                    <h3>Expedição 1</h3>
                    <p>Data: 12/10/2024</p>
                    <p>Local: Parque das Águas</p>
                    <button style={styles.button}>Inscrever-se</button>
                </li>
                <li style={styles.item}>
                    <h3>Expedição 2</h3>
                    <p>Data: 19/10/2024</p>
                    <p>Local: Lagoa do Rato</p>
                    <button style={styles.button}>Inscrever-se</button>
                </li>
            </ul>
        </div>
    );
};

export default Expeditions;
