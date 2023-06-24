import { Author } from '@/types';
import Image from 'next/image';

interface AuthorProps {
	author: Author;
}

const Author = ({ author }: AuthorProps) => {
	return (
		<div className='mb-8 mt-20 rounded-lg bg-black/20 p-12 text-center'>
			<div className='flex w-full justify-center'>
				<Image
					unoptimized
					src={author.photo.url}
					alt={author.name}
					width={100}
					height={100}
				/>
			</div>
			<h3 className='my-4 text-xl font-bold text-slate-100'>{author.name}</h3>
			<p className='text-lg text-slate-100'>{author.bio}</p>
		</div>
	);
};

export default Author;
