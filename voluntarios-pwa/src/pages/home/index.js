import React from 'react';
import { styles } from './styles';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Projeto VoluntáRIO</h1>
            <p style={styles.description}>
                O Projeto VoluntáRIO visa conectar voluntários com empresas parceiras, 
                promovendo ações para a limpeza do Rio Itajaí-Açu e oferecendo benefícios para todos os envolvidos. 
                Junte-se a nós para fazer a diferença na nossa comunidade!
            </p>
            <div style={styles.buttonContainer}>
                <a href="/register-login" style={styles.button}>Participe</a>
                <a href="#about" style={styles.button}>Saiba Mais</a>
            </div>
        </div>
    );
};

export default Home;
