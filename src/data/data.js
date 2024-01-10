import { v4 as randomId } from "uuid";
import {
  JBLsimsizQuloqchinAlvon1,
  JBLsimsizQuloqchinAlvon2,
  JBLsimsizQuloqchinAlvon3,
  JBLsimsizQuloqchinAlvon4,
  JBLsimsizQuloqchinAmetist1,
  JBLsimsizQuloqchinAmetist2,
  JBLsimsizQuloqchinAmetist3,
  JBLsimsizQuloqchinAmetist4,
  electronics,
} from "../assets/images";

export const products = [
  {
    id: randomId(),
    productName: "JBL simsiz quloqchin",
    description: [
      "JBL naushniklar musiqadan zavqlanish, ish, o'qish, o'yin-kulgi va sport uchun mos bo'lgan ko'p qirrali modeldir. O'lchamlar kattalar uchun ham, bolalar uchun ham mos keladi. Ular buklanadigan dizaynga ega, bu sizga ushbu aksessuarni saqlash uchun yanada ixcham va sumkangizda yoki xaltangizda olib yurish uchun qulay qilish imkonini beradi.",
      "Ular foydalanishda noqulaylik tug'dirmaydi, sport mashg'ulotlari, yurish paytida yiqilmaydi. Ushbu modelning asosiy afzalligi uzoq uzluksiz ishlashdir - 5 soatgacha va 200 mA / soat batareya va USB-toifa C kabeli orqali bir necha daqiqa zaryadlanganda u sizga audio ijro etish uchun bir necha soat zaryad beradi. Naushniklar bluetooth orqali ulangan, mikrofonga ega va eshitish vositasi sifatida foydalanish mumkin. Qurilmalar o'rtasida avtomatik o'tish, masalan: noutbukda video ko'rayotganda, telefon qo'ng'irog'i kelganda, ular smartfonga o'tadi, qo'ng'iroq tugagach, noutbukga qayta ulanadi. JBL Pure Bass texnologiyasi tufayli siz sevimli musiqangizni tinglayotganda ulkan ovozdan bahramand bo'lishingiz mumkin.",
    ],
    category: {
      categoryName: "Elektronika",
      categoryImage: electronics,
      categoryColors: ["blue-100", "blue-300"],
    },
    price: 100, // dollars are determined
    discount: 0.2,
    discountPrice: function () {
      return this.price - this.price * this.discount;
    },
    howMuchDiscount: function () {
      return 100 * this.discount;
    },
    images: [
      JBLsimsizQuloqchinAmetist1,
      JBLsimsizQuloqchinAlvon1,
      JBLsimsizQuloqchinAmetist2,
      JBLsimsizQuloqchinAlvon2,
      JBLsimsizQuloqchinAmetist3,
      JBLsimsizQuloqchinAlvon3,
      JBLsimsizQuloqchinAmetist4,
      JBLsimsizQuloqchinAlvon4,
    ],
    colors: [
      {
        colorName: "Ametist",
        active: true,
        image: 0,
        theRest: 12,
      },
      {
        colorName: "Alvon",
        active: false,
        image: 1,
        theRest: 5,
      },
      // {
      //   colorName: "Oq",
      //   active: false,
      // },
      // {
      //   colorName: "Qizil",
      //   active: false,
      // },
      // {
      //   colorName: "Havorang",
      //   active: false,
      // },
      // {
      //   colorName: "Och yashil",
      //   active: false,
      // },
      // {
      //   colorName: "Metall kulrang",
      //   active: false,
      // },
      // {
      //   colorName: "Binafsha",
      //   active: false,
      // },
      // {
      //   colorName: "Qora",
      //   active: false,
      // },
    ],
    countProduct: 1,
    reservations: 1000,
    rating: 4.6,
    saved: false,
    isItNew: true,
    top: true,
  },
];

function setCategoryToArray(arr) {
  let categoryes = new Set();
  arr.forEach(function (item) {
    let category = item.category.categoryName;
    categoryes.add(category);
  });
  let categoryArr = Array.from(categoryes);
  return categoryArr;
}

const category = setCategoryToArray(products);

export const categoryProduct = category.map((item, index) => {
  let product = {
    id: randomId(),
    category: item,
    image: products[index].category.categoryImage,
    color: products[index].category.categoryColors,
  };
  return product;
});

export const savedProduct = (product) => {
  product.saved = !product.saved;
};
