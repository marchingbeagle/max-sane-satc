// apiService.js
const API_URL = 'http://localhost:8080/';

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/user`);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Erro ao buscar todos os usuários:', response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar todos os usuários:', error);
    return [];
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log('Usuário excluído com sucesso!');
    } else {
      console.error('Erro ao excluir o usuário:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao excluir o usuário:', error);
  }
};
