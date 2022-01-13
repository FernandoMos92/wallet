const urlApi = 'https://economia.awesomeapi.com.br/json/all';

const requestApi = async () => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

export default requestApi;
