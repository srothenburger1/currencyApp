const axios = require('axios'); //http client

const getExhangeRate = async (fromCurrency,toCurrency) =>{
    try{
    const response = await axios.get('http://data.fixer.io/api/latest?    access_key=[25038915a7bc7147dab2f0c02eaf53a5]&format=1');
    const rates = resonse.data.rates;
    const euro = 1 / rate[fromCurrency];//values benchmark is eu
    const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
    }catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`);
      }
};

const getCountries = async (currencyCode)=>{
    try{
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
} catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
};

const convert = async (fromCurrency, toCurrency, amount)=>{
    
    const exchangeRate = await getExhangeRate(fromCurrency,toCurrency);
    const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    
    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
    
};
convertCurrency('USD','HRK',20)
.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error.message);
});