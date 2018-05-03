const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'test') {
    app.use(cors());
}

app.post('/:number', (req, res) => {
    const {number} = req.params;
    const { mult } = req.query;
    const { div } = req.body;

    const answer = parseInt(number) * parseInt(mult) / parseInt(div);
    res.json(answer);
});

const server = app.listen(PORT, () => 
console.log(`listening on http://localhost${PORT}`)
);

module.exports = server;