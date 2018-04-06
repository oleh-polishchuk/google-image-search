const app = require('express')();
const rest = require('restler');
const request = require('request');
const CacheService = require('./services/CacheService');
const UrlService = require('./services/UrlService');

app.get('/', (req, res) => {
    const url = UrlService.buildUrl(req.query.q);
    const image = CacheService.get(url);

    if (image) {
        let options = {
            url: image,
            strictSSL: false
        };
        request.get(options).pipe(res);
    } else {
        rest.get(url).on('complete', (searchResult) => {
            if (!CacheService.get(url)) {
                CacheService.set(url, searchResult.items[0].link);
            }
            let options = {
                url: CacheService.get(url),
                strictSSL: false
            };
            request.get(options).pipe(res);
        });
    }
});

app.listen(3000, () => console.log('Example app listening on port 3000!, http://localhost:3000'));
