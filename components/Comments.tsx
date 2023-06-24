import { getComments } from '@/services';
import moment from 'moment';

interface CommentsProps {
	slug: string;
}

const Comments = async ({ slug }: CommentsProps) => {
	const comments = await getComments(slug);

	return (
		<>
			{comments.length > 0 && (
				<div className='mb-8 rounded-lg bg-slate-100 p-8 pb-12 shadow-lg'>
					<h3 className='mb-8 border-b pb-4 text-xl font-semibold'>
						{comments.length} Comment{comments.length > 1 && 's'}
					</h3>
					{comments.map(comment => (
						<div
							key={comment.createdAt}
							className='mb-4 border-b border-gray-100 pb-4'>
							<p className='mb-4'>
								<span className='font-semibold'>{comment.name}</span> on{' '}
								<time dateTime={comment.createdAt}>
									{moment(comment.createdAt).format('MMM DD, YYYY')}
								</time>
							</p>
							<p className='whitespace-pre-line text-gray-600'>
								{comment.comment}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comments;
