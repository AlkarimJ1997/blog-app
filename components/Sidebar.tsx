import Categories from '@/components/Categories';
import PostWidget from '@/components/PostWidget';

const Sidebar = () => {
	return (
		<aside className='col-span-1 lg:col-span-4'>
			<div className='relative top-8 lg:sticky'>
				<PostWidget />
				<Categories />
			</div>
		</aside>
	);
};

export default Sidebar;
