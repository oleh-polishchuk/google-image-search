const app = require('express')();
const ApplicationService = require('./app/services/ApplicationService');

process.env.API_KEY ='AIzaSyBRYLb6wNx0bK6Gvuj8nmVVFLM7aBadFtY';
process.env.SEARCH_ENGINE_ID = '008572460060509754579:gfw5azaighc';

app.get('/', (req, res) => {
    ApplicationService.getImageByQuery(req, res);
});

app.listen(3000, () => console.log('Example app listening on port 3000!, http://localhost:3000'));
