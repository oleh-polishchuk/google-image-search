const request = require('request');
const UrlService = require('./UrlService');
const ImageService = require('./ImageService');

exports.getImageByQuery = (req, res) => {
    const url = UrlService.buildUrl(req.query.q);

    ImageService.getImageByUrl(url, (err, image) => {
        let options = {
            url: image,
            strictSSL: false
        };

        request.get(options).pipe(res);
    });
};
