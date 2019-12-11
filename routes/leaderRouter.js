const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();



dishRouter.use(bodyParser.json());


dishRouter.route('/')




.all((req,res,next) => {

     res.statusCode=200;
     res.setHeader('Content-Type','text/plain');
     next();

})

.get((req,res,next) => {

          res.end('Will send all the details of the leader  to you');


})


.put((req,res,next) =>{

        res.statusCode=403;
        res.end('PUT operation not supported on /leaders');

})


.post((req,res,next) => {

            res.end('will add leader : '+req.body.name+ 'with the details: '+req.body.description);
})


.delete((req,res,next) => {

          res.end('Deleting all leaders!');

});


dishRouter.route('/:dishId')


.all((req,res,next) => {

                 res.statusCode = 200;
                 res.setHeader('Content-Type','text/plain');
                 next();


})




.get((req,res,next) => {

                                  res.end('we send the details of the leaders : ' +req.params.dishId+' to you.');


})

.put((req,res,next) => {

               res.write('updating the leader : '+req.params.dishId+ '\n');
               res.end("will update leader : "+req.body.name+" with the details: "+req.body.description);


})



.post((req,res,next) => {

               res.end("post operation not supported on /leaders/"+req.params.dishId);



})

.delete((req,res,next) => {

         res.end("Deleting leaders : "+req.params.dishId);

});





module.exports = dishRouter
