import React, { useState } from 'react';
import { styles } from './styles';

const EventRegistration = () => {
    const [eventData, setEventData] = useState({ title: '', date: '', location: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro ao registrar evento:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Cadastro de Evento</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    style={styles.input}
                    placeholder="Título do Evento"
                    value={eventData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    style={styles.input}
                    value={eventData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    style={styles.input}
                    placeholder="Local do Evento"
                    value={eventData.location}
                    onChange={handleChange}
                    required
                />
                <button type="submit" style={styles.button}>Cadastrar Evento</button>
            </form>
        </div>
    );
};

export default EventRegistration;
