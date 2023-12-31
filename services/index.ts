import { Category, Comment, FullPost, Post, UserData } from '@/types';
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API || '';

export const getPosts = async () => {
	const query = gql`
		query Assets {
			assets {
				createdAt
				id
				publishedAt
				fileName
				url
				updatedAt
			}
			postsConnection {
				edges {
					node {
						author {
							bio
							id
							name
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const response = (await request(graphqlAPI, query)) as any;

	return response.postsConnection.edges.map((node: { node: Post }) => {
		return node.node;
	}) as Post[];
};

export const getRecentPosts = async () => {
	const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

	const response = (await request(graphqlAPI, query)) as any;

	return response.posts as Post[];
};

export const getSimilarPosts = async (categories: string[], slug: string) => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const response = (await request(graphqlAPI, query, {
		slug,
		categories,
	})) as any;

	return response.posts as Post[];
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;

	const response = (await request(graphqlAPI, query)) as any;

	return response.categories as Category[];
};

export const getPostBySlug = async (slug: string) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				author {
					bio
					id
					name
					photo {
						url
					}
				}
				createdAt
				slug
				title
				excerpt
				featuredImage {
					url
				}
				categories {
					name
					slug
				}
				content {
					raw
				}
			}
		}
	`;

	const response = (await request(graphqlAPI, query, { slug })) as any;

	return response.post as FullPost;
};

export const postComment = async (data: UserData) => {
	const result = await fetch('/api/comments', {
		method: 'POST',
		body: JSON.stringify(data),
	});

	return result.json();
};

export const getComments = async (slug: string) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				name
				createdAt
				comment
			}
		}
	`;

	const response = (await request(graphqlAPI, query, { slug })) as any;

	return response.comments as Comment[];
};

export const getFeaturedPosts = async () => {
	const query = gql`
		query GetFeaturedPosts {
			posts(where: { featuredPost: true }) {
				author {
					name
					photo {
						url
					}
				}
				featuredImage {
					url
				}
				title
				slug
				createdAt
			}
		}
	`;

	const response = (await request(graphqlAPI, query)) as any;

	return response.posts as Post[];
};
