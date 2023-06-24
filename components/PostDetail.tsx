import { FullPost } from '@/types';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

interface PostDetailProps {
	post: FullPost;
}

const PostDetail = ({ post }: PostDetailProps) => {
	return (
		<article className='mb-8 rounded-lg bg-slate-100 pb-12 shadow-lg lg:p-8'>
			<div className='relative mb-6 h-full w-full pb-80 shadow-md'>
				<Image
					fill
					src={post.featuredImage.url}
					alt={post.title}
					className='rounded-t-lg object-cover lg:rounded-lg'
				/>
			</div>
			<div className='px-4 lg:px-0'>
				<div className='mb-8 flex w-full items-center justify-between'>
					<div className='hidden items-center justify-center gap-2 md:flex lg:mb-0 lg:w-auto'>
						<Image
							src={post.author.photo.url}
							alt={post.author.name}
							width={30}
							height={30}
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
				<h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
				<RichText
					content={post.content.raw}
					renderers={{
						bold: ({ children }) => <b>{children}</b>,
						italic: ({ children }) => <em>{children}</em>,
						underline: ({ children }) => <u>{children}</u>,
						h3: ({ children }) => (
							<h3 className='mb-4 text-xl font-semibold'>{children}</h3>
						),
						h4: ({ children }) => (
							<h4 className='mb-4 text-lg font-semibold'>{children}</h4>
						),
						p: ({ children }) => <p className='mb-8'>{children}</p>,
						img: ({ src, title, width, height }) => (
							<Image
								src={src || ''}
								alt={title || ''}
								width={width}
								height={height}
							/>
						),
					}}
				/>
			</div>
		</article>
	);
};

export default PostDetail;
