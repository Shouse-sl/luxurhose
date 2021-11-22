const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_51JKfypJrWJGFvc2oTblKi5vwIJxiq8433SlrVEXKYus3rBkPgChQOkzJWJihGsN1JSo5VkcY4QSJfhuarLPNqtqR00fmZDYZYC');
//configración de respuestas al detectar una petición get (ruta de la petición, función)
router.get('/',(req,res) => {
	res.render('index');
});

router.post('/checkout1', async (req,res)=>{
	console.log("\x1b[36m%s\x1b[0m","Pago recivido")
  	console.log(req.body);
  	const customer = await stripe.customers.create({
  		email: req.body.stripeEmail,
  		source: req.body.stripeToken
  	});
	const charge = stripe.charges.create({
		amount: '100',
		currency: 'usd',
		customer: customer.id,
		description: 'casa de lujo IBIZA'
	});
	console.log(charge.id);
	res.render('pago_1_$');
});
router.post('/checkout10', async (req,res)=>{
	console.log("\x1b[36m%s\x1b[0m","Pago recivido")
  	console.log(req.body);
  	const customer = await stripe.customers.create({
  		email: req.body.stripeEmail,
  		source: req.body.stripeToken
  	});
	const charge = stripe.charges.create({
		amount: '1000',
		currency: 'usd',
		customer: customer.id,
		description: 'casa de lujo IBIZA'
	});
	console.log(charge.id);
	res.render('pago_10_$');
});
router.post('/checkout100', async (req,res)=>{
	console.log("\x1b[36m%s\x1b[0m","Pago recivido")
  	console.log(req.body);
  	const customer = await stripe.customers.create({
  		email: req.body.stripeEmail,
  		source: req.body.stripeToken
  	});
	const charge = stripe.charges.create({
		amount: '10000',
		currency: 'usd',
		customer: customer.id,
		description: 'casa de lujo IBIZA'
	});
	console.log(charge.id);
	res.render('pago_100_$');
});

router.post('/checkout1000', async (req,res)=>{
	console.log("\x1b[36m%s\x1b[0m","Pago recivido")
  	console.log(req.body);
  	const customer = await stripe.customers.create({
  		email: req.body.stripeEmail,
  		source: req.body.stripeToken
  	});
	const charge = stripe.charges.create({
		amount: '100000',
		currency: 'usd',
		customer: customer.id,
		description: 'casa de lujo IBIZA'
	});
	console.log(charge.id);
	res.render('pago_1000_$');
});


module.exports = router;