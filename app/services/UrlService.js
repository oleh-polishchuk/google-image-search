const UrlBuilder = require('../builders/UrlBuilder');

exports.buildUrl = (query) => {
    const url = UrlBuilder.getUrlBuilder()
        .withAPIKey(process.env.API_KEY)
        .withSearchEngineID(process.env.SEARCH_ENGINE_ID)
        .withQuery(encodeURI(query))
        .withImageSize('large')
        .withRights(['cc_publicdomain', 'cc_attribute', 'cc_sharealike'])
        .build();

    console.log('==> Build url:      ' + url);
    return url;
};
