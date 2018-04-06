function UrlBuilder() {
    this.url = {
        defaultUrl: 'https://www.googleapis.com/customsearch/v1',
        query: '',
        apiKey: '',
        searchEngineID: '',
        searchType: 'image',
        imgSize: 'large',
        rights: ['cc_publicdomain', 'cc_attribute', 'cc_sharealike']
    };
}

UrlBuilder.prototype.withAPIKey = function (apiKey) {
    this.url.apiKey = apiKey;
    return this;
};

UrlBuilder.prototype.withSearchEngineID = function (searchEngineID) {
    this.url.searchEngineID = searchEngineID;
    return this;
};

UrlBuilder.prototype.withImageSize = function (imageSize) {
    this.url.imgSize = imageSize;
    return this;
};

UrlBuilder.prototype.withRights = function (rights) {
    this.url.rights = rights;
    return this;
};

UrlBuilder.prototype.withQuery = function (query) {
    this.url.query = query;
    return this;
};

UrlBuilder.prototype.build = function () {
    if (!this.url.apiKey || !this.url.searchEngineID) {
        throw new Error("Missing parameter: API Key or Search Engine ID.");
    }

    return this.url.defaultUrl +
        '?key=' + this.url.apiKey +
        '&cx=' + this.url.searchEngineID +
        '&searchType=' + this.url.searchType +
        // '&imgSize=' + this.url.imgSize +
        // '&rights=' + this.url.rights +
        '&q=' + this.url.query;
};

exports.getUrlBuilder = function () {
    return new UrlBuilder();
};