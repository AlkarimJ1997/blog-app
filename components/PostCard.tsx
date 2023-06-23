import moment from 'moment';
import Image from 'next/image';
import { Post } from '@/services';
import Link from 'next/link';

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	return (
		<article className='mb-8 rounded-lg bg-slate-100 pb-12 shadow-lg lg:p-8'>
			<div className='relative mb-6 h-80 w-full overflow-hidden pb-80 shadow-md'>
				<Image
					fill
					src={post.featuredImage.url}
					alt={post.title}
					className='rounded-t-lg object-cover shadow-lg lg:rounded-lg'
				/>
			</div>
			<h1 className='mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-300 hover:text-pink-600'>
				<Link href={`/post/${post.slug}`}>{post.title}</Link>
			</h1>
			<div className='mb-8 block w-full items-center justify-center text-center lg:flex lg:gap-8'>
				<div className='mb-4 flex items-center justify-center gap-2 lg:mb-0 lg:w-auto'>
					<Image
						src={post.author.photo.url}
						alt={post.author.name}
						width={50}
						height={50}
						className='rounded-full'
					/>
					<p className='text-lg text-gray-700'>{post.author.name}</p>
				</div>
				<div className='font-medium text-gray-700'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='mr-2 inline h-6 w-6 text-pink-500'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
						/>
					</svg>
					<time dateTime={post.createdAt} className='align-middle'>
						{moment(post.createdAt).format('MMM DD, YYYY')}
					</time>
				</div>
			</div>
			<p className='mb-8 px-6 text-center text-sm font-normal text-gray-700 md:text-lg'>
				{post.excerpt}
			</p>
			<div className='text-center'>
				<Link href={`/post/${post.slug}`}>
					<span className='inline-block cursor-pointer rounded-full bg-pink-600 px-4 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1 sm:px-6 md:px-8'>
						Continue Reading
					</span>
				</Link>
			</div>
		</article>
	);
};

export default PostCard;
