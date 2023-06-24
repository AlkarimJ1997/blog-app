import { Post } from '@/types';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PostDetailProps {
	post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
	const getContentFragment = (
		index: number,
		text: string,
		obj: any,
		type: string
	) => {
		let modifiedText: any = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case 'heading-three':
				return (
					<h3 key={index} className='mb-4 text-xl font-semibold'>
						{modifiedText}
					</h3>
				);
			case 'paragraph':
				return (
					<p key={index} className='mb-8'>
						{modifiedText.map((item: any, i: number) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case 'heading-four':
				return (
					<h4 key={index} className='mb-4 text-lg font-semibold'>
						{modifiedText}
					</h4>
				);
			case 'image':
				return (
					<Image
						key={index}
						src={obj.src}
						alt={obj.title}
						width={obj.width}
						height={obj.height}
					/>
				);
			default:
				return modifiedText;
		}
	};

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
				{post.content?.raw.children.map((contentObj, index) => {
					const children = contentObj.children.map((item, itemIndex) => {
						return getContentFragment(itemIndex, item.text, item);
					});

					return getContentFragment(
						index,
						children,
						contentObj,
						contentObj.type
					);
				})}
			</div>
		</article>
	);
};

export default PostDetail;
