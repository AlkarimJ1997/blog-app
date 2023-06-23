import { request, gql } from 'graphql-request';

export type Post = {
	author: {
		bio: string;
		id: string;
		name: string;
		photo: {
			url: string;
		};
	};
	createdAt: string;
	slug: string;
	title: string;
	excerpt: string;
	featuredImage: {
		url: string;
	};
	categories: {
		name: string;
		slug: string;
	}[];
};

export const getPosts = async () => {
	const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API || '';

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
