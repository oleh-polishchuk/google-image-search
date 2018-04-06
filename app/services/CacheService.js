const cache = {};

exports.get = (key) => {
    return cache[key];
};

exports.set = (key, value) => {
    console.log('==> Save to cache:  ' + key);

    cache[key] = value;
};
