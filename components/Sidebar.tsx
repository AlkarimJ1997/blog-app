import Categories from '@/components/Categories';
import PostWidget from '@/components/PostWidget';

interface SidebarProps {
	slug?: string;
	categories?: string[];
}

const Sidebar = ({ slug, categories }: SidebarProps) => {
	return (
		<aside className='col-span-1 lg:col-span-4'>
			<div className='relative top-8 lg:sticky'>
				<PostWidget slug={slug} categories={categories} />
				<Categories />
			</div>
		</aside>
	);
};

export default Sidebar;
