const axios = require('axios');

const getExhangeRate = async (fromCurrency,toCurrency) =>{
    const response = await axios.get('http://data.fixer.io/api/latest?    access_key=[25038915a7bc7147dab2f0c02eaf53a5]&format=1');
    const rates = resonse.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
};
