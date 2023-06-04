const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const port = process.env.PORT || 4040 ;
app.get("/" , (req , res) => {
    console.log('====================================');
    console.log(req);
    console.log('====================================');
});
app.post("/" , (req , res) => {
    console.log('====================================');
    console.log(req);
    console.log('====================================');
})
app.put("/" , (req , res) => {
    console.log('====================================');
    console.log(req);
    console.log('====================================');
})
app.listen( port , () => console.log(`Server lisning at port : -${port}`));