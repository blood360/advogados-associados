import React from 'react';
import './BlogPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ArticleCard from '../../components/Blog/ArticleCard/ArticleCard';

// Dados de artigos simulados
const mockArticles = [
  {
    id: '1',
    title: 'Novas Regras da Aposentadoria por Idade em 2025',
    date: '2025-07-15',
    summary: 'Entenda as últimas mudanças na legislação previdenciária e como elas podem afetar seu direito à aposentadoria.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    title: 'Direitos dos Animais: Como Denunciar Maus-Tratos Online',
    date: '2025-07-01',
    summary: 'Conheça os canais e procedimentos para realizar denúncias de forma eficaz e proteger nossos amigos de quatro patas.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    title: 'Adoção de Crianças: Guia Completo para Futuros Pais',
    date: '2025-06-20',
    summary: 'Um passo a passo sobre o processo de adoção no Brasil, desde os requisitos legais até as fases da habilitação.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

function BlogPage() {
  return (
    <div className="blog-page-container">
      <Navbar />
      <main className="blog-main-content">
        <h1 className="blog-title">Blog e Notícias Jurídicas</h1>
        <p className="blog-subtitle">Mantenha-se informado sobre seus direitos e as últimas novidades do mundo jurídico.</p>
        
        <div className="articles-grid">
          {mockArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="blog-newsletter">
          <h3>Receba nossas novidades por e-mail!</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu melhor e-mail" required />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;