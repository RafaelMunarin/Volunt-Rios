import React from 'react';
import { styles } from './styles';

const PointsBenefits = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Pontuação e Benefícios</h2>
            <p style={styles.info}>Pontos Acumulados: 150</p>
            <p style={styles.info}>Prêmios disponíveis:</p>
            <ul style={styles.list}>
                <li style={styles.item}>Prêmio 1: 100 pontos</li>
                <li style={styles.item}>Prêmio 2: 200 pontos</li>
            </ul>
        </div>
    );
};

export default PointsBenefits;
