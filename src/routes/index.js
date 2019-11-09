const express=require('express');
const User=require('../model/database');
const Comentary=require('../model/database2');
const router=express.Router();

router.get('/',(req,res,next)=>{
	res.render('index');
});
router.get('/signup',(req,res,next)=>{
	res.render('signup');
});
router.get('/redes',(req,res,next)=>{
	res.render('redes');
});
router.get('/dns',(req,res,next)=>{
	res.render('dns');
});
router.get('/firewall',async(req,res,next)=>{
	const comentarys = await Comentary.find();
	res.render('firewall',{
		comentarys
	});
});
router.get('/gusta/:id',async(req,res,next)=>{
	let {id}=req.params;
	const gusta = await Comentary.findById(id);
	gusta.status = !gusta.status;
	await gusta.save();
	res.redirect('/firewall');
});
router.post('/comentary',async(req,res,next)=>{
	const comentary = new Comentary(req.body);
	await comentary.save();
	console.log(comentary);
	res.redirect('/firewall');
});
router.post('/signup',async(req,res,next)=>{
	const user = new User(req.body);;
	await user.save();
	console.log(user);
	res.redirect('/blog');
});
router.get('/blog',(req,res,next)=>{
	res.render('blog');
});

module.exports=router;
