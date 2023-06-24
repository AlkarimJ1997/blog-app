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
  content?: {
    raw: {
      children: {
        type: string;
        children: any[];
      }
    }
  }
}

export interface Category {
	name: string;
	slug: string;
}
