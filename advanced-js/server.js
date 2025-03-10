const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));

//Router
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/toDo', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/toDo.html'));
});


app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');