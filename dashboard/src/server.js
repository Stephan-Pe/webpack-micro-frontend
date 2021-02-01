const express = require('express');
const path = require('path');
const fs = require('fs'); // Node.js filesystem
const port = 9000;

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('*', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/dashboard.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(port, function () {
    console.log(`Application is running on http://localhost:${port}`)
})