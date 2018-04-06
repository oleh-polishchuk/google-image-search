const UrlBuilder = require('../builders/UrlBuilder');

const API_KEY = 'AIzaSyBRYLb6wNx0bK6Gvuj8nmVVFLM7aBadFtY';
const SEARCH_ENGINE_ID = '008572460060509754579:gfw5azaighc';

exports.buildUrl = (query) => {
    const url = UrlBuilder.getUrlBuilder()
        .withAPIKey(API_KEY)
        .withSearchEngineID(SEARCH_ENGINE_ID)
        .withQuery(encodeURI(query))
        .withImageSize('large')
        .withRights(['cc_publicdomain', 'cc_attribute', 'cc_sharealike'])
        .build();

    console.log('==> Build url:      ' + url);
    return url;
};
