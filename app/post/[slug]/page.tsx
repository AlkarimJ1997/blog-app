import {
	PostDetail,
	Author,
	CommentsForm,
	Comments,
	Sidebar,
} from '@/components';
import { getPostBySlug } from '@/services';

interface PostDetailsProps {
	params: {
		slug: string;
	};
}

const PostDetails = async ({ params }: PostDetailsProps) => {
	const post = await getPostBySlug(params.slug);

	return (
		<div className='container mx-auto mb-8 px-10'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
				<main className='col-span-1 lg:col-span-8'>
					<PostDetail post={post} />
					<Author author={post.author} />
					<CommentsForm slug={params.slug} />
					<Comments slug={params.slug} />
				</main>
				<Sidebar
					slug={params.slug}
					categories={post.categories.map(category => category.slug)}
				/>
			</div>
		</div>
	);
};

export default PostDetails;
