import axios from 'axios';

const API_URL = 'http://localhost:8080/doc';

// Função para buscar todos os documentos
export const findAllDocuments = async () => {
  try {
    const response = await axios.get(`${API_URL}/findAll`);
    return response.data; // Retorna os dados dos documentos
  } catch (error) {
    console.error("Erro ao buscar os documentos:", error);
    throw error;
  }
};

// Função para buscar um documento pelo ID
export const findDocumentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/find/${id}`);
    return response.data; // Retorna o documento encontrado
  } catch (error) {
    console.error(`Erro ao buscar o documento com ID: ${id}`, error);
    throw error;
  }
};

// Função para criar um novo documento
export const createDocument = async (doc) => {
  try {
    const response = await axios.post(`${API_URL}/insert`, doc);
    return response.data; // Retorna o documento criado
  } catch (error) {
    console.error("Erro ao criar o documento:", error);
    throw error;
  }
};

// Função para atualizar um documento
export const updateDocument = async (id, doc) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, doc);
    return response.data; // Retorna o documento atualizado
  } catch (error) {
    console.error(`Erro ao atualizar o documento com ID: ${id}`, error);
    throw error;
  }
};

// Função para deletar um documento
export const deleteDocument = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar o documento com ID: ${id}`, error);
    throw error;
  }
};