const express = require('express');

const app = new express;
const port = 3000;

app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/static', express.static(`${__dirname}/node_modules/`));

app.use((req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => {
    console.info('Server started, listening on %d', port);
});