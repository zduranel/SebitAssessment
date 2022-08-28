type IPostDetail = {
  id: number;
  category_id: number;
  title: string;
  description: string;
  date: string;
  author: string;
}

type ICategory = {
  id: number;
  name: string;
  description: string;
  icon: string;
}
