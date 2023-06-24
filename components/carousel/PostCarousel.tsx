'use client';

import { getFeaturedPosts } from '@/services';
import FeaturedPostCard from '@/components/carousel/FeaturedPostCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PostCarousel = async () => {
	const featuredPosts = await getFeaturedPosts();

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 1024, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 768, min: 640 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 640, min: 0 },
			items: 1,
		},
	};

	return (
		<div className='mb-8'>
			<Carousel
				infinite={true}
				ssr={true}
				responsive={responsive}
				itemClass='px-4 mr-4'>
				{featuredPosts.map((post, index) => (
					<FeaturedPostCard key={index} post={post} />
				))}
			</Carousel>
		</div>
	);
};

export default PostCarousel;
