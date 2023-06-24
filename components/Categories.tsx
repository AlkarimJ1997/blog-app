import { getCategories } from '@/services';
import Link from 'next/link';

const Categories = async () => {
	const categories = await getCategories();

	return (
		<div className='mb-8 rounded-lg bg-slate-100 p-8 pb-12 shadow-lg'>
			<h3 className='mb-8 border-b pb-4 text-xl font-bold'>Categories</h3>
			{categories.map(category => (
				<Link key={category.slug} href={`/category/${category.slug}`}>
					<span className='mb-3 block cursor-pointer pb-3'>
						{category.name}
					</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
