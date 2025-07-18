import React from 'react';
import './EventsPage.css'; // Criaremos este CSS
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import EventCard from '../../components/Events/EventCard/EventCard';

// Dados de eventos simulados
const mockEvents = [
  {
    id: 'e1',
    title: 'Webinar: Novas Perspectivas no Direito Previdenciário',
    date: '2025-08-10',
    time: '19:00',
    location: 'Online via Zoom',
    description: 'Participe do nosso webinar gratuito sobre as últimas tendências e decisões no Direito Previdenciário.',
    link: 'https://zoom.us/webinar/12345',
  },
  {
    id: 'e2',
    title: 'Palestra: Proteção Animal e Legislação Vigente',
    date: '2025-08-25',
    time: '14:00',
    location: 'Auditório Principal',
    description: 'Palestra presencial abordando os avanços na legislação de defesa e proteção animal no Brasil.',
    link: '#', // Link para mais detalhes ou inscrição
  },
  {
    id: 'e3',
    title: 'Mentoria em Adoção: Tira-Dúvidas para Futuros Pais',
    date: '2025-09-05',
    time: '10:00',
    location: 'Sede da Advocacia [Nome]',
    description: 'Sessão de mentoria exclusiva para casais e indivíduos interessados no processo de adoção. Vagas limitadas.',
    link: '#',
  },
];

function EventsPage() {
  return (
    <div className="events-page-container">
      <Navbar />
      <main className="events-main-content">
        <h1 className="events-title">Eventos, Palestras e Mentorias</h1>
        <p className="events-subtitle">Fique por dentro de nossos convites e aprimore seus conhecimentos jurídicos.</p>
        
        <div className="events-grid">
          {mockEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EventsPage;