// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")


// const PORT = process.env.PORT || 8080

// const app = express()
// app.use(cors())
// app.use(express.json({limit : "10mb"}))


// const schema = new mongoose.Schema({
//     image: String,
// })
// const ShemaModel = mongoose.model("images", schema)


// app.get("/", (req, res) => {
//     res.json({ message: "Server is running" })
// })


// app.post("/upload", async (req, res) => {
//     console.log(req.body);
//     const images = new ShemaModel({
//         image: req.body.img,
//     })
//     await images.save()
//     res.send({ message: "Topic created" , success: true })
// })

// mongoose.connect("mongodb+srv://zunairkhan742:iO9rcT2am2u2emEg@cluster0.tjdkfnf.mongodb.net/products")
//     .then(() => {
//         console.log("connect to DB");
//         app.listen(PORT, () => console.log("server is running at" + PORT))
//     }).catch((err) => {
//         console.log(err);
//     })


// Server-side code example for Node.js/Express with MongoDB

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// Mongoose model
const ImageSchema = new mongoose.Schema({
  image: String,
});

const ImageModel = mongoose.model('Image', ImageSchema);


//product model

// const productSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   code: String,
//   id: String,
//   price: Number
// });

// module.exports = mongoose.model('Product', productSchema);



// app.post('/products', async (req, res) => {
//   const { title, description, code, id, price } = req.body;
//   const newProduct = new productSchema({ title, description, code, id, price });
//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });



// app.get('/', async (req, res) => {
//   try {
//     const products = await productSchema.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Upload endpoint
app.post('/upload', async (req, res) => {
  try {
    const { img } = req.body;
    const newImage = new ImageModel({ image: img });
    await newImage.save();
    res.json({ success: true, message: 'Image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to upload image', error });
  }
});

// Fetch images endpoint
app.get('/', async (req, res) => {
  try {
    const images = await ImageModel.find({});
    res.json(images);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch images', error });
  }
});

mongoose.connect('mongodb+srv://zunairkhan742:iO9rcT2am2u2emEg@cluster0.tjdkfnf.mongodb.net/products')
  .then(() => app.listen(8080, () => console.log('Server started on port 8080')))
  .catch(err => console.error('Failed to connect to MongoDB', err));
