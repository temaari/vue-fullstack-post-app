const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET post
router.get('/', async (req, res) => {
	const posts = await loadPostsCollection();
	res.send(await posts.find({}).toArray());
});

// ADD post
router.post('/', async (req, res) => {
	const posts = await loadPostsCollection();
	await posts.insertOne({
		text: req.body.text,
		createdAt: new Date()
	});
	res.status(201).send();
});


// DELETE post
router.delete('/:id', async (req, res) => {
	const posts = await loadPostsCollection();
	await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
	res.status(200).send();
})

async function loadPostsCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://christian:damars0nBars@seer29.tipk9.mongodb.net/<dbname>?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	);

	return client.db('seer29').collection('posts');
}

module.exports = router;