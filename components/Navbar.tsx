import { getCategories } from '@/services';
import Link from 'next/link';

const Navbar = async () => {
	const categories = await getCategories();

	return (
		<header className='container mx-auto mb-8 px-10'>
			<nav className='flex justify-between border-b border-blue-400 py-8'>
				<Link
					href='/'
					title='Home'
					className='text-4xl font-bold text-slate-100'>
					Blogify
				</Link>
				<ul role='list' className='hidden items-center gap-4 md:flex'>
					{categories.map(category => (
						<li key={category.slug}>
							<Link
								href={`/category/${category.slug}`}
								className='font-semibold text-slate-100'>
								{category.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
