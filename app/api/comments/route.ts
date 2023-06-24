import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient, gql } from 'graphql-request';

type Body = {
	name: string;
	email: string;
	comment: string;
	slug: string;
};

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API || '';

export async function POST(request: NextRequest) {
	const { name, email, comment, slug } = (await request.json()) as Body;

	if (!name || !email || !comment || !slug) {
		return new NextResponse('Missing fields', { status: 400 });
	}

	const client = new GraphQLClient(graphqlAPI, {
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
		},
	});

	const query = gql`
		mutation CreateComment(
			$name: String!
			$email: String!
			$comment: String!
			$slug: String!
		) {
			createComment(
				data: {
					name: $name
					email: $email
					comment: $comment
					post: { connect: { slug: $slug } }
				}
			) {
				id
			}
		}
	`;

	const result = await client.request(query, {
		name,
		email,
		comment,
		slug,
	});

	return NextResponse.json(result);
}
