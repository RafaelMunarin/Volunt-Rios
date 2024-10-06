import React from 'react';
import { styles } from './styles';

const Forum = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Fórum</h2>
            <div style={styles.post}>
                <h3>Discussão sobre a última expedição</h3>
                <p>Relato e fotos da expedição no Lagoa do Rato...</p>
            </div>
        </div>
    );
};

export default Forum;
