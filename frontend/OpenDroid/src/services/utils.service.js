class UtilsService {
    findInvalidControls(form) {
        const invalid = [];
        const controls = Object.keys(form); // Supondo que `form` seja um objeto
        for (const name of controls) {
            if (!form[name]) { // Verifica se o campo está vazio ou nulo
                invalid.push(name);
            }
        }
        return invalid;
    }

    cutTags(tagString) {
        // Retorna uma lista de tags cortadas
        return tagString.split(' ').map(tag => {
          // Verifica se a tag já começa com #
          return tag.startsWith('#') ? tag : `#${tag}`;
      });
    }
}

export default new UtilsService();
