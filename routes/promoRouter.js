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

          res.end('Will send all the promotions  to you');


})


.put((req,res,next) =>{

        res.statusCode=403;
        res.end('PUT operation not supported on /promotions');

})


.post((req,res,next) => {

            res.end('will add promotion : '+req.body.name+ 'with the details: '+req.body.description);
})


.delete((req,res,next) => {

          res.end('Deleting all promotions!');

});


dishRouter.route('/:dishId')


.all((req,res,next) => {

                 res.statusCode = 200;
                 res.setHeader('Content-Type','text/plain');
                 next();


})




.get((req,res,next) => {

                                  res.end('we send the details of the promotion : ' +req.params.dishId+' to you.');


})

.put((req,res,next) => {

               res.write('updating the promotion : '+req.params.dishId+ '\n');
               res.end("will update promotion : "+req.body.name+" with the details: "+req.body.description);


})



.post((req,res,next) => {

               res.end("post operation not supported on /promotions/"+req.params.dishId);



})

.delete((req,res,next) => {

         res.end("Deleting promotions : "+req.params.dishId);

});





module.exports = dishRouter
