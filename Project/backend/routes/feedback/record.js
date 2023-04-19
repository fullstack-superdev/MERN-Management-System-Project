const express = require("express");

const feedbackRoutes = express.Router();

const dbo = require("../../db/conn"); // connect to the database

const ObjectId = require("mongodb").ObjectId // convert the Id from String to ObjectId for the _id

// http://localhost:8070/feedback/add ( created 1 record )
feedbackRoutes.route("/add").post(function (req, response) {

	let db_connect = dbo.getDb("sansalu");

	let myobject = {
		name:req.body.name,
        description:req.body.description
	};

	db_connect.collection("feedback").insertOne(myobject, function (err, res) {
		if (err) throw err;
		console.log("1 record inserted");
		response.json(res);
	});
});

module.exports = feedbackRoutes;