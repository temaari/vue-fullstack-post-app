import axios from 'axios';

const url = 'api/posts/';

class PostService {
	//GET Posts
	static getPosts() {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(post => ({
						...post,
						createdAt: new Date(post.createdAt)
					}))
				);
			} catch(err) {
				reject(err);
			}
		})
	}
	//CREATE Posts
	static insertPost(text) {
		return axios.post(url, { text });
	}

	//DELETE Posts
	static deletePost(id) {
		return axios.delete(`${url}${id}`);
	}
}

export default PostService;