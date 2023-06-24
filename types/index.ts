import type { RichTextContent } from '@graphcms/rich-text-types';

export interface Author {
	bio: string;
	id: string;
	name: string;
	photo: {
		url: string;
	};
}

export interface Category {
	name: string;
	slug: string;
}

export interface Post {
	author: Author;
	createdAt: string;
	slug: string;
	title: string;
	excerpt: string;
	featuredImage: {
		url: string;
	};
	categories: Category[];
}

export interface FullPost extends Post {
	content: {
		raw: RichTextContent;
	};
}

export interface UserData {
	name: string;
	email: string;
	comment: string;
	slug: string;
}

export interface Comment {
  name: string;
  createdAt: string;
  comment: string;
}
