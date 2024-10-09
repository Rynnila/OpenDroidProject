import axios from 'axios';

class AuthService {
  constructor() {
    this.apiURL = 'http://localhost:8080/user'; // URL correta da sua API
  }

  async register(data) {
    try {
      const response = await axios.post(`${this.apiURL}/insert`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Erro ao registrar');
    }
  }

  // Outros métodos de autenticação, como login, logout, etc.
}

export default new AuthService();