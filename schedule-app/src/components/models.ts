export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Drawer {
  icon: string | undefined;
  title: string;
  path: string;
}