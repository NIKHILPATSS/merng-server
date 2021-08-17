const postsResolvers = require('./posts.js');
const usersResolvers = require('./users.js');
const commentResolvers = require('./comments.js');

module.exports = {
	Post: {
		likeCount: (parent) => parent.likes.length,
		commentCount: (parent) => parent.comments.length,
	},
	Query: {
		...postsResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
		...postsResolvers.Mutation,
		...commentResolvers.Mutation,
	},
	Subscription: {
		...postsResolvers.Subscription,
	},
};
