import React, { useState, useEffect } from 'react';
import './ArticlePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Dados de artigos simulados (para buscar o artigo pelo ID)
const mockArticles = [
  {
    id: '1',
    title: 'Novas Regras da Aposentadoria por Idade em 2025',
    date: '2025-07-15',
    summary: 'Entenda as últimas mudanças na legislação previdenciária e como elas podem afetar seu direito à aposentadoria.',
    content: `
      <h2>Introdução às Novas Regras</h2>
      <p>O ano de 2025 traz consigo uma série de atualizações nas regras da aposentadoria por idade, impactando diretamente o planejamento previdenciário de milhões de brasileiros. É fundamental estar atento a essas mudanças para garantir seus direitos e evitar surpresas no futuro.</p>
      
      <h3>Principais Alterações na Legislação</h3>
      <p>A reforma da previdência de 2019 estabeleceu um período de transição, e 2025 marca mais uma etapa desse processo. As principais alterações incluem um aumento gradual na idade mínima para aposentadoria e no tempo de contribuição exigido, especialmente para mulheres.</p>
      <ul>
        <li>Aumento da idade mínima para mulheres.</li>
        <li>Aumento do tempo de contribuição para homens e mulheres.</li>
        <li>Novos cálculos para o valor do benefício.</li>
      </ul>

      <h3>Como Isso Afeta Você?</h3>
      <p>Se você está próximo de se aposentar, é crucial buscar uma análise do seu caso com um especialista em direito previdenciário. Um bom planejamento pode otimizar seu benefício e garantir uma transição mais tranquila para a aposentadoria.</p>
      <p>Para mais detalhes, entre em contato com nossa equipe.</p>
    `,
  },
  {
    id: '2',
    title: 'Direitos dos Animais: Como Denunciar Maus-Tratos Online',
    date: '2025-07-01',
    summary: 'Conheça os canais e procedimentos para realizar denúncias de forma eficaz e proteger nossos amigos de quatro patas.',
    content: `
      <h2>A Importância da Denúncia</h2>
      <p>Os animais, assim como os humanos, possuem direitos e são protegidos pela legislação brasileira. A denúncia de maus-tratos é um ato de cidadania e essencial para combater a crueldade e garantir o bem-estar animal.</p>
      
      <h3>Canais Online para Denúncias</h3>
      <p>Atualmente, existem diversas plataformas e órgãos que facilitam a denúncia de maus-tratos a animais pela internet:</p>
      <ul>
        <li>Delegacias eletrônicas específicas para crimes contra animais.</li>
        <li>Ministério Público local.</li>
        <li>Organizações não-governamentais (ONGs) de proteção animal.</li>
      </ul>

      <h3>O que Incluir na Denúncia?</h3>
      <p>Ao realizar uma denúncia, é importante fornecer o máximo de detalhes possível, como:</p>
      <ul>
        <li>Localização exata (endereço completo).</li>
        <li>Descrição detalhada da situação.</li>
        <li>Fotos e vídeos (se houver e for seguro obtê-los).</li>
        <li>Identificação do agressor (se souber).</li>
      </ul>
      <p>Lembre-se que o anonimato é garantido na maioria dos casos. Juntos, podemos fazer a diferença na vida dos animais.</p>
    `,
  },
  {
    id: '3',
    title: 'Adoção de Crianças: Guia Completo para Futuros Pais',
    date: '2025-06-20',
    summary: 'Um passo a passo sobre o processo de adoção no Brasil, desde os requisitos legais até as fases da habilitação.',
    content: `
      <h2>O Sonho da Adoção</h2>
      <p>A adoção é um ato de amor e solidariedade que constrói famílias e oferece um lar para crianças e adolescentes que precisam de apoio e afeto. No Brasil, o processo de adoção é regulamentado e visa garantir o melhor interesse da criança.</p>
      
      <h3>Requisitos e Habilitação</h3>
      <p>Para se tornar um pai ou mãe por adoção, é necessário cumprir alguns requisitos legais e passar por um processo de habilitação que inclui:</p>
      <ul>
        <li>Idade mínima (18 anos).</li>
        <li>Diferença de idade mínima entre adotante e adotado.</li>
        <li>Avaliação psicossocial e jurídica.</li>
        <li>Curso preparatório para adoção.</li>
      </ul>

      <h3>As Fases do Processo</h3>
      <p>O processo de adoção pode ser dividido em várias fases, desde a habilitação até a guarda provisória e a sentença final:</p>
      <ol>
        <li>Habilitação dos Pretendentes.</li>
        <li>Busca e Associação da Criança/Adolescente.</li>
        <li>Estágio de Convivência.</li>
        <li>Sentença de Adoção.</li>
      </ol>
      <p>Cada etapa exige paciência, dedicação e, muitas vezes, o acompanhamento jurídico especializado. Nossa equipe está pronta para auxiliar em cada fase desse caminho tão significativo.</p>
    `,
  },
];

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]); // Simulação de comentários
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Extrai o ID do artigo da URL (ex: /blog/1 -> id = '1')
    const pathSegments = window.location.pathname.split('/');
    const articleId = pathSegments[pathSegments.length - 1];
    
    const foundArticle = mockArticles.find(a => a.id === articleId);
    setArticle(foundArticle);
    // Simula carregamento de comentários para este artigo
    setComments([
        { id: 'c1', author: 'Visitante Anônimo', date: '2025-07-16', text: 'Artigo muito esclarecedor, parabéns!' },
        { id: 'c2', author: 'Maria Comenta', date: '2025-07-17', text: 'Entendi tudo sobre as novas regras.' },
    ]);
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        author: 'Você', // Em um app real, seria o nome do usuário logado
        date: new Date().toLocaleDateString('pt-BR'),
        text: newComment.trim(),
      };
      setComments(prev => [...prev, comment]);
      setNewComment('');
      alert('Comentário enviado para moderação.');
    }
  };

  if (!article) {
    return (
      <div className="article-page-container">
        <Navbar />
        <main className="article-main-content">
          <p className="article-not-found">Artigo não encontrado.</p>
          <a href="/blog" className="back-to-blog-button">&larr; Voltar para o Blog</a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="article-page-container">
      <Navbar />
      <main className="article-main-content">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-meta">Publicado em: {new Date(article.date).toLocaleDateString('pt-BR')}</p>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div> {/* Renderiza HTML */}
        
        <a href="/blog" className="back-to-blog-button">&larr; Voltar para o Blog</a>

        <div className="comments-section">
          <h2>Comentários</h2>
          {comments.length > 0 ? (
            <ul className="comments-list">
              {comments.map(comment => (
                <li key={comment.id} className="comment-item">
                  <p className="comment-author">{comment.author} em {comment.date}</p>
                  <p className="comment-text">{comment.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-comments-message">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
          )}

          <form onSubmit={handleCommentSubmit} className="comment-form">
            <h3>Deixe seu Comentário</h3>
            <textarea
              placeholder="Seu comentário..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows="5"
              required
            ></textarea>
            <button type="submit">Enviar Comentário</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ArticlePage;