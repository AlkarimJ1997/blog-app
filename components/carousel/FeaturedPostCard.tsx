import { Post } from '@/types';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedPostCardProps {
	post: Post;
}

const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
	return (
		<Link href={`/post/${post.slug}`} className='outline-none'>
			<div className='grid place-items-center rounded-lg bg-gradient-to-b from-gray-400 via-gray-700 to-black opacity-60 shadow-md'>
				<div className='col-[1/2] row-[1/2] text-center'>
					<time
						dateTime={post.createdAt}
						className='text-shadow mb-4 block text-xs font-semibold text-slate-100'>
						{moment(post.createdAt).format('MMM DD, YYYY')}
					</time>
					<p className='text-shadow mb-4 text-2xl font-semibold text-slate-100'>
						{post.title}
					</p>
					<div className='flex items-center justify-center gap-2'>
						<Image
							unoptimized
							src={post.author.photo.url}
							alt={post.author.name}
							width={30}
							height={30}
							className='rounded-full drop-shadow-lg'
						/>
						<p className='text-shadow font-medium text-slate-100'>
							{post.author.name}
						</p>
					</div>
				</div>
				<div className='-z-10 col-[1/2] row-[1/2] h-72 w-full'>
					<Image
						fill
						src={post.featuredImage.url}
						alt={post.title}
						className='rounded-lg object-cover'
					/>
				</div>
			</div>
			<span className='sr-only'>{post.title}</span>
		</Link>
	);
};

export default FeaturedPostCard;
