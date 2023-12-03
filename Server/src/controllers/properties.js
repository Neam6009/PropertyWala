const mongoose = require("mongoose");
const propertyModel = require("../models/property_model");
const { compareSync } = require("bcryptjs");

mongoose.connect("mongodb://0.0.0.0:27017/FFSD_DB");

exports.getAllProperties = async (req, res, next) => {
	console.log("jfkldj");
	try {
		let propertyArray = await propertyModel.Property.find({});

		console.log(propertyArray);
		res.status(200).json(propertyArray);
	} catch (error) {
		res.status(400).json({ error });
	}
};

exports.getPropertiesByUser = async (req, res) => {
	const userId = req.params.id;
	const properties = await propertyModel.Property.find({ user_id: userId });
	console.log(properties);
	res.status(200).json(properties);
};

exports.removeProperty = async (req, res) => {
	const propertyId = req.params.id;
	propertyModel.Property.deleteOne({ _id: propertyId }).then(() =>
		console.log("deleted")
	);
	res.status(200).json({ result: "done" });
};

exports.propertyDetails = async (req, res) => {
	let property_id = req.params._id;
	property = await propertyModel.Property.findById(property_id);
	// let favButton = "Favourite";
	// const wishlistPropertiesId = await userModel.User.findById(
	//   req.user.id
	// ).then((user) => user.wishlist);
	// if (wishlistPropertiesId.includes(property_id)) {
	//   favButton = "Remove from Favourite";
	// }
	console.log(property);
	res.status(200).json(property);
};

exports.insertProperty = async (req, res) => {
	const property = req.body.property;
	const user_id = req.body.user_id;
	const images = req.body.images;
	console.log(images);

	await propertyModel.Property.create({
		name: property.propertyName,
		price: property.propertyPrice,
		location: property.propertyCity,
		locality: property.propertyLocality,
		bedsNum: property.bedsNum,
		bathsNum: property.bathsNum,
		area: property.propertyArea,
		purpose: property.propertyPurpose,
		description: property.propertyDescription,
		parkingArea: property.propertyParking,
		propertyType: property.propertyType,
		propertyImage: images,
		yearBuilt: property.yearBuilt,
		lotSize: property.lotSize,
		lister: {
			name: property.listerName,
			description: property.listerDescription,
			relation: property.listerRelation,
			mobileNumber: property.listerMobileNumber,
			email: property.listerEmail,
		},
		user_id,
	});

	res.status(200).json({ result: "uploaded" });
};

// router.post(
//   "/list-property",
//   userContoller.isLoggedIn,
//   upload.array("propertyImages", 3),
//   async function (req, res) {
//     if (!req.user) {
//       // res.redirect('/login');
//     } else {
//       const newImages = req.files.map((file) => {
//         return {
//           data: file.buffer,
//           contentType: file.mimetype,
//         };
//       });
//       let propertyDetails = req.body;
//       await insertProperty(
//         req,
//         res,
//         propertyDetails,
//         newImages,
//         req.user._id
//       );
//       // res.redirect('/');
//     }
//   }
// );

exports.getAllPropertiesByType = async (type, location) => {
	let propertyArray = [];
	if (location == "undefined") {
		await propertyModel.Property.find({ purpose: type }).then((result) => {
			propertyArray = result;
		});
	} else {
		await propertyModel.Property.find({
			$or: [
				{ location: { $regex: new RegExp(location, "i") } },
				{ name: { $regex: new RegExp(location, "i") } },
			],

			purpose: type,
		}).then((results) => {
			propertyArray = results;
		});
	}
	return propertyArray;
};

getPropertiesByFilters = async (type, location, query) => {
	let query1 = { purpose: type };

	if (typeof query.bedsNum !== "undefined") {
		query1.bedsNum = query.bedsNum;
	}

	if (typeof query.propertyType !== "undefined") {
		query1.propertyType = query.propertyType;
	}

	let sorter = {};
	if (query.price == "lh") {
		sorter.price = 1;
	} else if (query.price == "hl") {
		sorter.price = -1;
	}
	let propertyArray = [];
	if (location == "undefined" && Object.keys.length == 0) {
		await propertyModel.Property.find({ purpose: type }).then((result) => {
			propertyArray = result;
		});
	} else if (location != "undefined" && Object.keys(query).length != 0) {
		query1.$or = [];
		query1.$or.push({ location: { $regex: new RegExp(location, "i") } });
		query1.$or.push({ name: { $regex: new RegExp(location, "i") } });

		propertyArray = await propertyModel.Property.find(query1)
			.sort(sorter)
			.exec();
	} else if (location == "undefined" && Object.keys.length != 0) {
		propertyArray = await propertyModel.Property.find(query1)
			.sort(sorter)
			.exec();
	} else {
		console.log("c4");
	}
	return propertyArray;
};

exports.getPropertiesByLocation = async (req, res) => {
	const location = req.params.location;
	const properties = await Property.find({ location });
	console.log(properties);
	res.send(properties);
};

exports.filteredProperties = async (req, res) => {
	const type = req.params.type;
	let location = "" + req.params.location;
	const query = req.query;
	let properties;
	if (location == "undefined" && Object.keys(query).length == 0) {
		properties = await getAllPropertiesByType(type, location);
	} else if (location != "undefined" && Object.keys(query).length == 0) {
		properties = await getAllPropertiesByType(type, location);
	} else if (location == "undefined" && Object.keys(query).length != 0) {
		properties = await getPropertiesByFilters(type, location, query);
	} else if (location != "undefined" && Object.keys(query).length != 0) {
		properties = await getPropertiesByFilters(type, location, query);
	} else {
		console.log("mole");
		properties = {};
	}
	const filteredProperties = {
		property: { type },
		user: req.user,
		propertyArray: properties,
	};
	res.status(200).json(filteredProperties);
};

// router.get(
//   "/show-properties/:type/:location?",
//   userContoller.isLoggedIn,
//   async (req, res) => {
//     const type = req.params.type;
//     let location = "" + req.params.location;
//     const query = req.query;
//     let properties;
//     if (location == "undefined" && Object.keys(query).length == 0) {
//       properties = await propertyController.getAllPropertiesByType(
//         type,
//         location
//       );
//     } else if (location != "undefined" && Object.keys(query).length == 0) {
//       properties = await propertyController.getAllPropertiesByType(
//         type,
//         location
//       );
//     } else if (location == "undefined" && Object.keys(query).length != 0) {
//       properties = await propertyController.getPropertiesByFilters(
//         type,
//         location,
//         query
//       );
//     } else if (location != "undefined" && Object.keys(query).length != 0) {
//       properties = await propertyController.getPropertiesByFilters(
//         type,
//         location,
//         query
//       );
//     } else {
//       console.log("mole");
//       properties = {};
//     }
//     const filteredProperties = {
//       property: { type },
//       user: req.user,
//       propertyArray: properties,
//     };
//     // res.render('properties', filteredProperties);
//   }
// );
