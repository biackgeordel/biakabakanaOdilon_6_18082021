const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    try{
        const token=(req.headers.authorization).split(' ')[1];
        //convert le tabToken en objet avec la fonction verify de jspnwebtoken
        const tabToken=jwt.verify(token,"RANDOM_TOKEN_SECRET");
        const userId=tabToken.userId;
        if(req.body.userId && req.body.userId!==userId){
            throw "invalid user ID";
        }else{
            next();
        }
    }catch{
        res.status(403).json({error});
    }







}