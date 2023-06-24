import type { RichTextContent } from '@graphcms/rich-text-types';

export interface Post {
	author: {
		bio: string;
		id: string;
		name: string;
		photo: {
			url: string;
		};
	};
	createdAt: string;
	slug: string;
	title: string;
	excerpt: string;
	featuredImage: {
		url: string;
	};
	categories: {
		name: string;
		slug: string;
	}[];
}

export interface FullPost extends Post {
	content: {
		raw: RichTextContent;
	};
}

export interface Category {
	name: string;
	slug: string;
}
