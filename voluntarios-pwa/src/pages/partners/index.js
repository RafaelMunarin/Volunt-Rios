import React from 'react';
import { styles } from './styles';

const Partners = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Empresas Parceiras</h2>
            <ul style={styles.list}>
                <li style={styles.item}>
                    <h3>Empresa 1</h3>
                    <p>Desconto: 10%</p>
                </li>
                <li style={styles.item}>
                    <h3>Empresa 2</h3>
                    <p>Desconto: 15%</p>
                </li>
            </ul>
        </div>
    );
};

export default Partners;
