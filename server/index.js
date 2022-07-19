// libraries
import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import passport from 'passport';

const session = require('express-session');
require('express-async-errors');

// env
require('dotenv').config();

//API
import Auth from './API/Auth';
import Restaurants from './API/Restaurant';
import Foods from './API/Food';
import Menus from './API/Menu';
import Images from './API/Image';
import Orders from './API/Orders';
import Reviews from './API/Reviews';
import Users from './API/User';
import Payments from './API/Payments';

//Config
import GoogleConfig from './Config/Google.config';
import RouteConfig from './Config/Route.config';

//database connection
import ConnectDB from './Database/connection';

//middlewares
const Zomato = Express();

Zomato.use(Express.urlencoded({ extended: true }));
Zomato.use(Express.json());
Zomato.use(Cors());
Zomato.use(Helmet());
Zomato.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
);
Zomato.use(passport.initialize());
Zomato.use(passport.session());

Zomato.use('/auth', Auth);
Zomato.use('/restaurant', Restaurants);
Zomato.use('/food', Foods);
Zomato.use('/menu', Menus);
Zomato.use('/image', Images);
Zomato.use('/order', Orders);
Zomato.use('/review', Reviews);
Zomato.use('/user', Users);
Zomato.use('/payments', Payments);

//passport
GoogleConfig(passport);
RouteConfig(passport);

//404 route
Zomato.get('/', (req, res) => {
	res.json({ error: 'Invalid Route' });
});

Zomato.listen(4000, () => {
	console.log('Server is running at port 4000.🚀');
	ConnectDB()
		.then(() => console.log('Database is connected!🛩️'))
		.catch(() =>
			console.log('Database connection failed!🤯')
		);
});
