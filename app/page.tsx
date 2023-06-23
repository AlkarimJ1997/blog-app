import { Categories, PostCard, PostWidget } from '@/components';
import { getPosts } from '@/services';

const Home = async () => {
	const posts = await getPosts() || [];

	return (
		<div className='container mx-auto mb-8 px-10'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
				<div className='col-span-1 lg:col-span-8'>
					{posts.map(post => (
						<PostCard key={post.title} post={post} />
					))}
				</div>
				<div className='col-span-1 lg:col-span-4'>
					<div className='relative top-8 lg:sticky'>
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
