// api.js
const apiUrl = 'https://awd-2023.azurewebsites.net';

export const loginApi = async (username, password) => {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  return response.json();
};

export const getUserInfo = async () => {
  const response = await fetch(`${apiUrl}/auth/me`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
    },
  });

  return response.json();
};
