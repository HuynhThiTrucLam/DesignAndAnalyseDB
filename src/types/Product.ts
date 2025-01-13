export type Type = {
  id: string;
  value: string;
};
export type Size = {
  id: string;
  value: string;
  inventory: number;
};

export type Color = {
  id: string;
  value: string;
  sizeList: Size[];
  img: string[];
};

export type FeedBack = {
  id: string;
  name: string;
  createAt: string;
  message: string;
  image: string[];
  rating: number;
  reply?: string;
};

export type Product = {
  id: string;
  name: string;
  typeOf: Type;
  desc: string;
  material: string;
  discount: number;
  policy: string;
  care_instructrion: string;
  colorList: Color[];
  totalSold: number;
  unitPrice: number;
  rating: number;
  feedback: FeedBack[];
};
