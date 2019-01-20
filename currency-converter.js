const axios = require('axios'); //http client

const getExhangeRate = async (fromCurrency,toCurrency) =>{
    const response = await axios.get('http://data.fixer.io/api/latest?    access_key=[25038915a7bc7147dab2f0c02eaf53a5]&format=1');
    const rates = resonse.data.rates;
    const euro = 1 / rate[fromCurrency];//values benchmark is eu
    const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
};

const getCountries = async (currencyCode)=>{
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
};

