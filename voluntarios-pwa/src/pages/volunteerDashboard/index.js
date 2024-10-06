import React from 'react';
import { styles } from './styles';

const VolunteerDashboard = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Dashboard do Voluntário</h2>
            <p style={styles.info}>Informações do perfil do voluntário</p>
            <p style={styles.info}>Pontos acumulados: 100</p>
            <p style={styles.info}>Expedições futuras: 2</p>
            <p style={styles.info}>Expedições passadas: 3</p>
            <button style={styles.button}>Acessar Fórum</button>
            <button style={styles.button}>Grupo de WhatsApp</button>
        </div>
    );
};

export default VolunteerDashboard;
