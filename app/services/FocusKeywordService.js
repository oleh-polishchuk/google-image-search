const fs = require('fs');
const path = require('path');
const parser = require('xml2json');

const FOCUS_KEYWORDS = [
    "fhd led tv", "fhd led television", "hd led tv", "led smart tv", "hdr led tv", "hd led television",
    "hdr led television", "led 3d tv", "3d smart tv", "uhd led television", "uhd led tv", "32-inch hd tv",
    "40-inch fhd television", "hdr smart tv", "fhd smart tv", "hitachi led tv", "oled smart tv", "hd lcd television",
    "fhd lcd tv", "lcd smart tv", "fhd lcd television", "24-inch led television", "40-inch led television",
    "led 3d television", "hd lcd tv", "xled smart tv", "32-inch led television", "39-inch led television",
    "qled smart tv", "lcd 3d television"
];

exports.readXML = (filePath, cb) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return cb(err);
        cb(null, data);
    })
};

exports.xmlToJson = (xml) => {
    const jsonString = parser.toJson(xml);
    return JSON.parse(jsonString);
};

exports.printProducts = (products) => {
    for (let i = 0; i < products.length; i++) {
        let item = products[i];
        console.log(`==> Item with ID: ${item.PhrasetechItemId} and FocusKeyword: ${item.FocusKeyword}`);
    }
};

exports.getFocusKeywords = () => {
    this.readXML(path.join(__dirname, '../static/xml/tv_products.xml'), (err, xml) => {
        if (err) return console.error(err);

        let data = this.xmlToJson(xml);
        this.printProducts(data.posts.item);
    })
};

this.getFocusKeywords();