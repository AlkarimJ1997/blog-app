import Link from 'next/link';

const categories = [
	{ name: 'React', slug: 'react' },
	{ name: 'Web Development', slug: 'web-dev' },
];

const Header = () => {
	return (
		<header className='container mx-auto mb-8 px-10'>
			<div className='inline-block w-full border-b border-blue-400 py-8'>
				<div className='block md:float-left'>
					<Link href='/' title='Home'>
						<span className='cursor-pointer text-4xl font-bold text-white'>
							Chronicle
						</span>
					</Link>
				</div>
				<div className='hidden md:float-left md:contents'>
					{categories.map(category => (
						<Link key={category.slug} href={`/category/${category.slug}`}>
							<span className='ml-4 mt-2 cursor-pointer align-middle font-semibold text-white md:float-right'>
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
