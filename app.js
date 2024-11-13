const express = require('express');
const members = require('./routes/api/members');
const exphbs = require('express-handlebars');
const port = process.env.PORT || 4000;


const logger = require('./middleware/logger')

const app = express();

//init logger
//app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.send('<h1>hello world!!</h1>');
});

app.use('/api/members', require('./routes/api/members'));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})