/**
 * Created by Sandeep on 01/06/14.
 */

var Gig=require('../models/gig');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/gigs')
    .get(function(req,res){
       Gig.find(function(err,gigs){
           if(err)
                res.send(err);
           res.json(gigs);
       });
    })

    .post(function(req,res){
        var gig=new Gig(req.body);
        gig.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Gig Added'});
        });
    });

router.route('/gigs/:id')
    .put(function(req,res){
        Gig.findOne({_id:req.params.id},function(err,gig){

            if(err)
                res.send(err);

           for(prop in req.body){
                gig[prop]=req.body[prop];
           }

            // save the gig
            gig.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Gig updated!' });
            });

        });
    })

    .get(function(req,res){
        Gig.findOne({_id:req.params.id},function(err, gig) {
            if(err)
                res.send(err);

            res.json(gig);
        });
    })

    .delete(function(req,res){
        Gig.remove({
            _id: req.params.id
        }, function(err, gig) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;
