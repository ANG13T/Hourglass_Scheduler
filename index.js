const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();
app.use(express.static('app_files/assets'))
const port = process.env.PORT || "8000";

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/app_files/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
router.get('/about',function(req,res){
res.sendFile(path.join(__dirname+'/app_files/about.html'));
});
  
//add the router
app.use('/', router);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});