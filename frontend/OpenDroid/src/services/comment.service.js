// src/services/commentService.js
import axios from 'axios';

// Função para buscar todos os comentários
export const getComments = () => {
  return axios.get('http://localhost:8080/comment/findAll', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Função para inserir um novo comentário
export const insertComment = (comment) => {
  return axios.post('http://localhost:8080/comment/insert', comment, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Função para deletar um comentário pelo ID
export const deleteComment = (id) => {
  return axios.delete(`http://localhost:8080/comment/delete/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Função para atualizar um comentário pelo ID
export const updateComment = (id, updatedComment) => {
  return axios.put(`http://localhost:8080/comment/update/${id}`, updatedComment, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};