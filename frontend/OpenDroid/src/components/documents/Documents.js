import React, { useEffect, useState } from 'react';
import { findAllDocuments, createDocument, deleteDocument } from '../../services/doc.service';
import { useFilter } from '../../services/filter.service';
import './Documents.css';

const Documents = () => {
  const [docs, setDocs] = useState([]);
  const { searchTerm, setSearchTerm } = useFilter();
  const [newDoc, setNewDoc] = useState({ title: '', description: '', tag: '', link: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const documents = await findAllDocuments();
        setDocs(documents);
      } catch (error) {
        console.error("Erro ao carregar documentos", error);
      }
    };

    fetchDocs();
  }, []);

  const openPDF = (link) => {
    window.open(link, '_blank');
  };

  const cutTags = (tag) => {
    return tag.split(' ');
  };

  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewDoc({
      ...newDoc,
      [e.target.name]: e.target.value
    });
  };

  const handleAddDocument = async () => {
    // Adiciona '#' antes de cada tag
    const formattedTags = newDoc.tag.split(' ').map(tag => `#${tag}`).join(' ');

    const docToAdd = {
      ...newDoc,
      tag: formattedTags,
      date: new Date().toISOString() // Define a data atual
    };

    try {
      const addedDoc = await createDocument(docToAdd); // Enviar o novo documento com link
      setDocs([...docs, addedDoc]);
      setNewDoc({ title: '', description: '', tag: '', link: '' }); // Resetar o estado do novo documento
      setIsModalOpen(false); // Fecha o modal após adicionar
    } catch (error) {
      console.error("Erro ao adicionar documento", error);
    }
  };

  const handleDeleteDocument = async (id) => {
    try {
      await deleteDocument(id);
      setDocs(docs.filter(doc => doc.id !== id));
    } catch (error) {
      console.error("Erro ao remover documento", error);
    }
  };

  // Função para formatar a data no formato dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona 0 à esquerda, se necessário
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona 0 à esquerda, se necessário
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Formato dd/mm/yyyy
  };

  return (
    <section className="content">
      <span className="title">Documentos</span>
      <p className="document-description">
        Em cada um dos documentos abaixo, você encontrará um material teórico sobre o tema presente título. 
        Você pode baixar o arquivo e estudar depois! As tags de identificação são as palavras-chave do conteúdo dos arquivos.
      </p>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Pesquisar documentos..."
        className="search-input"
      />

      <button className="bt-add-file" onClick={() => setIsModalOpen(true)}>+</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Adicionar Documento</h2>
            <input
              type="text"
              name="title"
              value={newDoc.title}
              onChange={handleInputChange}
              placeholder="Título do documento"
              className="input-field"
            />
            <input
              type="text"
              name="description"
              value={newDoc.description}
              onChange={handleInputChange}
              placeholder="Descrição do documento"
              className="input-field"
            />
            <input
              type="text"
              name="tag"
              value={newDoc.tag}
              onChange={handleInputChange}
              placeholder="Tags (separadas por espaço)"
              className="input-field"
              required
            />
            <input
              type="text"
              name="link"
              value={newDoc.link}
              onChange={handleInputChange}
              placeholder="Link do documento"
              className="input-field"
              required
            />
            <div className="modal-actions">
              <button className="bt-add-file2" onClick={handleAddDocument}>Adicionar</button>
              <button className="bt-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {filteredDocs.length > 0 ? (
        filteredDocs.map((doc) => (
          <div className="document-container" key={doc.id}>
            <div className="file-container">
              <span className="file-title">{doc.title}</span>
            </div>
            <div className="file-info-container">
              <p className="file-description">{doc.description}</p>
              <div className="tags">
                {cutTags(doc.tag).map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="file-download-container">
              <span className="file-date">Publicado em {formatDate(doc.date)}</span>
              <button className="bt-file" onClick={() => openPDF(doc.link)}>Baixar</button>
              <button className="bt-remove-file" onClick={() => handleDeleteDocument(doc.id)}>Remover</button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum documento encontrado.</p>
      )}
    </section>
  );
};

export default Documents;
