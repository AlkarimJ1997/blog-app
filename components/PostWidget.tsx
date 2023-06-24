import { getRecentPosts, getSimilarPosts } from '@/services';
import { Post } from '@/types';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

interface PostWidgetProps {
	categories?: string[];
	slug?: string;
}

const PostWidget = async ({ categories = [], slug = '' }: PostWidgetProps) => {
	let displayPosts = [];

	if (slug && !!categories.length) {
		displayPosts = await getSimilarPosts(categories, slug);
	} else {
		displayPosts = await getRecentPosts();
	}

	return (
		<div className='mb-8 rounded-lg bg-slate-100 p-8 shadow-lg'>
			<h3 className='mb-8 border-b pb-4 text-xl font-bold'>
				{slug ? 'Related Posts' : 'Recent Posts'}
			</h3>
			{displayPosts.map(post => (
				<div key={post.title} className='mb-4 flex w-full items-center gap-4'>
					<div className='w-16'>
						<Image
							src={post.featuredImage.url}
							alt={post.title}
							width={60}
							height={60}
							className='rounded-full'
						/>
					</div>
					<div>
						<time
							dateTime={post.createdAt}
							className='block text-xs text-gray-500'>
							{moment(post.createdAt).format('MMM DD, YYYY')}
						</time>
						<Link href={`/post/${post.slug}`} className='text-md'>
							{post.title}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
