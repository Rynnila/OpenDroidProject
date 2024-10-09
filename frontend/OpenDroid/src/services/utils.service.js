class UtilsService {
    findInvalidControls(errors) {
      // Retorna o primeiro campo inválido
      return Object.keys(errors)[0];
    }
  }
  
  export default new UtilsService();