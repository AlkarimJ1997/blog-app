import { PostCard, Categories } from '@/components';
import { getPosts } from '@/services';

interface CategoryPostProps {
	params: {
		slug: string;
	};
}

const CategoryPost = async ({ params }: CategoryPostProps) => {
	const posts = await getPosts();
	const categoryPosts = posts.filter(post => {
		return post.categories.some(category => category.slug === params.slug);
	});

	return (
		<div className='container mx-auto mb-8 px-10'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
				<main className='col-span-1 lg:col-span-8'>
					{categoryPosts.map((post, index) => (
						<PostCard key={index} post={post} />
					))}
				</main>
				<aside className='col-span-1 lg:col-span-4'>
					<div className='relative top-8 lg:sticky'>
						<Categories />
					</div>
				</aside>
			</div>
		</div>
	);
};

export default CategoryPost;
