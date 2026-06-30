export interface Category {
  id: string;
  name: string;
  placesCount: number;
  image: any;
  backgroundColor: string;
}

export const categories: Category[] = [
  {
    id: 'cat_street_food',
    name: 'Swallow',
    placesCount: 2,
    image: require('@/assets/images/dummy/categories/swallow.png'),
    backgroundColor: '#E8DCD9',
  },
  {
    id: 'cat_burger',
    name: 'Rice Matter',
    placesCount: 26,
    image: require('@/assets/images/dummy/categories/rice.png'),
    backgroundColor: '#F5EFCF',
  },
  {
    id: 'cat_american',
    name: 'Morning Chops',
    placesCount: 17,
    image: require('@/assets/images/dummy/categories/akara.png'),
    backgroundColor: '#F5EFCF',
  },
  {
    id: 'cat_chicken',
    name: 'Point & Kill',
    placesCount: 10,
    image: require('@/assets/images/dummy/categories/peppersoup.png'),
    backgroundColor: '#F4D7C7',
  },
  {
    id: 'cat_pizza',
    name: 'Sharwama Dem',
    placesCount: 42,
    image: require('@/assets/images/dummy/categories/kebab.png'),
    backgroundColor: '#E5E5E5',
  },
  {
    id: 'cat_bbq',
    name: 'Pastries Self',
    placesCount: 8,
    image: require('@/assets/images/dummy/categories/meatpie.png'),
    backgroundColor: '#E5E5E5',
  },
];
