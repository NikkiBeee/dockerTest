'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';




// App
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.send('Hello world\n');
});
 
app.put('/eval', async (req, res) => {
    try {
        // console.log("this is the req", req)
        console.log("this is the req.body", req.body)
        console.log("this is the req.params", req.params)
        const answer = await eval(req.body.func)
        res.json(answer);
    } catch (error) {
        console.log('this is the error in the docker: ', error)
    }
    
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`); 



// let x = 2
//let y = 3
//function () { return x+y }