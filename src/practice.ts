
//! Object boilerplate by using interface
interface User {
  name: string;
  age: number;
  id: number;
  phone: number;
}

const user: User = {
  name: "Fahim",
  age: 22,
  id: 0,
  phone: 8801701081446,
};

// console.log(user);

//* Build a class
class UserAccount {
  name: string;
  age: number;
  id: number;
  phone: number;

  constructor(name: string, age: number, id: number, phone: number) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.phone = phone;
  }
}

const userAcc: User = new UserAccount("Fahim Faisal", 22, 0, 8801701081446);

// console.log(userAcc);

//* Array in typeScript
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arr2: Array<number> = [14, 15, 16, 17, 18, 19, 20, 21, 22];
let arr3: string[] = ["Fahim Faisal", "Soikot", "Shakil", "Turky", "Sourov"];
let arr4: boolean[] = [true, false];

for (let i: number = 0; i < arr.length; i++) {
  // console.log("Array1->", arr[i]);
  // i < arr2.length && console.log("Array2->", arr2[i]);
}

//* Tuple in typeScript

let tuple: [number, string] = [22, "soikot"];

tuple[1];

interface NameViaLink {
  name: string;
  link: string;
}

interface Price {
  regular: number;
  sale: number;
  currency?: string;
}

interface Social extends NameViaLink {
  color: string;
  tooltip: string;
}

interface Image {
  altText: string;
  thumbnail: string;
  original: string;
  featured: boolean;
}

interface Customer {
  name: string;
  mail: string;
  rating: string;
  review: string;
  saveUserInformation: boolean;
}

interface Product {
  id: string;
  breadcrumbs: NameViaLink[];
  title: string;
  price: Price;
  summary: string;
  description: string;
  categories: NameViaLink[];
  wishList: boolean;
  share: Social[]
  images: Image[]
  reviews?: Customer[]
}

const products: Product[] = [
  {
    id: '1',
    breadcrumbs: [
      {
        name: 'Home',
        link: 'home-link'
      },
      {
        name: 'Shop',
        link: 'shop-link'
      },
      {
        name: 'Men',
        link: 'men-link'
      },
    ],
    title: 'this is title 1',
    price: {
      regular: 334,
      sale: 230,
      currency: '$'
    },
    summary: 'this is a demo summary',
    description: 'this is the demo description',
    categories: [
      {
        name: 'Men',
        link: 'men-link'
      },
      {
        name: 'T-shirt',
        link: 't-shirt-link'
      }
    ],
    wishList: false,
    share: [
      {
        color: 'blue',
        name: 'facebook',
        link: 'https://www.facebook.com',
        tooltip: 'share on facebook'
      },
      {
        color: 'sky-blue',
        name: 'google',
        link: 'https://www.google.com',
        tooltip: 'share on google'
      },
      {
        color: 'blue',
        name: 'linkedin',
        link: 'https://www.linkedin.com',
        tooltip: 'share on linkedin'
      },
    ],
    images: [
      {
        altText: 'sample alt',
        thumbnail: 'thumb.png',
        original: 'original.png',
        featured: true,
      },
      {
        altText: 'sample alt',
        thumbnail: 'thumb.png',
        original: 'original.png',
        featured: false,
      },
      {
        altText: 'sample alt',
        thumbnail: 'thumb.png',
        original: 'original.png',
        featured: false,
      },
    ]
  }
]
