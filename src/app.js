const express=require('express');
const port =process.env.PORT||80;
const path=require('path');
const app=new express();

//Public path

const publicPath=path.join(__dirname,"../public");

app.set('view engine','hbs');
app.use(express.static(publicPath))



app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})


app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('404error');
})

app.listen(port,()=>{
    console.log(`Running at port ${port}`)
})