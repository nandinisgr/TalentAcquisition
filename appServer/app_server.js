const express = require('express');
const app = express();
const path = require('path');
console.log(path.join(__dirname,'../dist/portal/'))
app.use(express.static(path.join(__dirname,'../dist/portal/')))
app.get('/',(req,res)=>{
res.render(path.join(__dirname,'../dist/portal/','index.html'))
})
app.listen(4600)