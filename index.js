const express = require("express");
const path = require("path");
const router = express.Router();
var bodyParser = require('body-parser')

const app = express();
app.use(express.static('app_files/assets'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT || "8000";

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/app_files/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
router.get('/about',function(req,res){
res.sendFile(path.join(__dirname+'/app_files/about.html'));
});

router.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/app_files/form.html'));
});

router.post('/schedule',function(req,res){
    console.log("body", req.body);
});

router.get('/schedule',function(req,res){
    res.sendFile(path.join(__dirname+'/app_files/schedule.html'));
});
  
//add the router
app.use('/', router);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});