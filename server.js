const express = require('express');
const app = express();
const PORT = 3000;

const AppName = 'WeBuy';


app.get('/' , (req, res) =>

res.send("<h1> WeBuy </h1> "));

app.get('/about' , (req, res) => {
    res.send(
        `<h1> ${AppName} </h1>
        <h1> Sofia Fedorova</h1>
        <h1> Fall Term 2025 </h1>`
        )

}) 



app.listen(PORT, () => {
    console.log('Web server currently listening on port');
})