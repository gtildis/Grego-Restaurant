/** @format */

const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("public")); /// make everything inside of public/ available

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials");

/// GETS

app.get("/", (req, res, next) => {
	// res.sendFile(__dirname + "/views/home-page.html");

	res.render("home-page");
});

app.get("/contact", (req, res, next) => {
	res.render("contact-page");
});

app.get("/pizzas/margarita", (req, res, next) => {
	const pizzaDetails = {
		name: "Margarita",
		price: 12,
		recommendedDrink: "beer",
		imageFile: "pizza-margarita.jpg",
		ingredients: ["mozzarella", "tomato sauce", "basilicum"],
	};

	res.render("product", pizzaDetails);
});

app.get("/pizzas/veggie", (req, res, next) => {
	const pizzaDetails = {
		name: "Veggie Pizza",
		price: 15,
		recommendedDrink: "power smoothie",
		imageFile: "pizza-veggie.jpg",
		ingredients: ["cherry tomatoes", "basilicum", "Olives"],
	};

	res.render("product", pizzaDetails);
});

app.get("/pizzas/seafood", (req, res, next) => {
	const pizzaDetails = {
		name: "Seafood Pizza",

		recommendedDrink: "white wine",
		imageFile: "pizza-seafood.jpg",
		ingredients: ["tomato sauce", "garlic", "prawn"],
	};

	res.render("product", pizzaDetails);
});

app.listen(3000, () => {
	console.log("server is listening on port 3000");
});
