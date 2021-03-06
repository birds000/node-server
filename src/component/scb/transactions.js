const axios = require('axios');
const { SCB_API, ACCOUNT_FROM, ACCOUNT_FROMTYPE } = require('../../util/connectSCB');
const { DateNowYMD } = require('../../util/formatDate')

async function Transaction(apiAuth) {
    var dateNow = DateNowYMD() 
    var data = JSON.stringify({ 
        "accountNo": ACCOUNT_FROM,  
        "pageNumber": "1", 
        "pageSize": 20, 
        "productType": "2", 
        // "startDate": "2021-02-28", 
        // "endDate": "2021-02-28", 
        "startDate": dateNow,
        "endDate": dateNow,
    });
    var config = {
        method: 'post',
        url: `${SCB_API}/v2/deposits/casa/transactions`,
        headers: {
            'Accept-Language': 'th',
            'Api-Auth': apiAuth,
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios(config);
        // console.log(JSON.stringify(response.data));
        const result = response.data;
        return result

    } catch (error) {
        // console.error(error);
        return error
    }
}

module.exports = { Transaction };
