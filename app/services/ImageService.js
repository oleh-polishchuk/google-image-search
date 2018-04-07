const rest = require('restler');
const CacheService = require('./CacheService');

exports.getImageByUrl = (url, cb) => {
    let image = CacheService.get(url);

    if (image) {
        cb(null, image);
    } else {
        rest.get(url).on('complete', (searchResult) => {
            if (!CacheService.get(url)) {
                CacheService.set(url, searchResult.items[0].link);
            }

            cb(null, CacheService.get(url));
        });
    }
};
