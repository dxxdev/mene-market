import { v4 as randomId } from "uuid";
import {
  BloodyJ90SOyinSichqonchasi1,
  BloodyJ90SOyinSichqonchasi2,
  BloodyJ90SOyinSichqonchasi3,
  BloodyJ90SOyinSichqonchasi4,
  JBLsimsizQuloqchinAlvon,
  JBLsimsizQuloqchinAmetist,
  JBLsimsizQuloqchinOq,
  JBLsimsizQuloqchinQora,
  aqlliSoatSmartBandM7Kok,
  aqlliSoatSmartBandM7Qora,
  aqlliSoatSmartBandM7ToqKok,
  computers,
  electronics,
  iPhone14ProBinafsha,
  iPhone14ProQora,
  iPhone14ProTilla,
  telephones,
  transformerCaseOq1,
  transformerCaseOq2,
  transformerCaseQora1,
  transformerCaseQora2,
  zalmanCaseKulrang,
  zalmanCaseOq,
  zalmanCaseQora,
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
      JBLsimsizQuloqchinAmetist,
      JBLsimsizQuloqchinAlvon,
      JBLsimsizQuloqchinOq,
      JBLsimsizQuloqchinQora,
    ],
    colors: [
      {
        colorName: "Ametist",
        active: true,
        image: 0,
        theRest: 23,
      },
      {
        colorName: "Alvon",
        active: false,
        image: 1,
        theRest: 1,
      },
      {
        colorName: "Oq",
        active: false,
        image: 2,
        theRest: 34,
      },
      {
        colorName: "Qora",
        active: false,
        image: 3,
        theRest: 12,
      },
    ],
    countProduct: 1,
    reservations: 1000,
    rating: 4.6,
    saved: false,
    isItNew: true,
    top: true,
  },
  {
    id: randomId(),
    productName: "Aqlli soat Smart Band M7",
    description: [
      "Kerakli xarakteristikaning tugmachasini bosib, tegishli turdagi soatni tanlashingiz mumkin: Magnit yoki to'g'ridan-to'g'ri ulanuvchi",
      "Tasma rangiga qarab aqlli soatlarni ham tanlashingiz mumkin.",
      "Bluetooth texnologiyasi bo'yicha Android 5.0 va undan yuqori versiyalari, IOS 9.0 va undan yuqori versiyalari mos keladi",
    ],
    category: {
      categoryName: "Elektronika",
      categoryImage: electronics,
      categoryColors: ["blue-100", "blue-300"],
    },
    price: 10, // dollars are determined
    discount: 0.2,
    discountPrice: function () {
      return this.price - this.price * this.discount;
    },
    howMuchDiscount: function () {
      return 100 * this.discount;
    },
    images: [
      aqlliSoatSmartBandM7Qora,
      aqlliSoatSmartBandM7ToqKok,
      aqlliSoatSmartBandM7Kok,
    ],
    colors: [
      {
        colorName: "Qora",
        active: true,
        image: 0,
        theRest: 23,
      },
      {
        colorName: "To'q ko'k",
        active: false,
        image: 1,
        theRest: 1,
      },
      {
        colorName: "Ko'k",
        active: false,
        image: 2,
        theRest: 34,
      },
    ],
    countProduct: 1,
    reservations: 100,
    rating: 2.9,
    saved: false,
    isItNew: true,
    top: true,
  },
  {
    id: randomId(),
    productName: "Bloody J90S o'yin sichqonchasi",
    description: [
      "A4Tech Bloody J90s simli sichqonchasi har bir o'yinchiga yoqadi. Uning og'ir optik sensori juda sezgir. Bu harakatning aniqligi va tezligini kafolatlaydi. Bunday aksessuar bilan o'yin maydoni yanada qulayroq bo'ladi. Tajribali o'yinchilar va yangi boshlanuvchilar har qanday to'siqlarni engib o'tishlari va turli janglarda doimo g'alaba qozonishlari mumkin. O'yinning qiyinligi va intensivligi darajasidan qat'i nazar, sichqoncha eng foydali bo'ladi. Bunday yordamchi bilan fitnada to'liq ishtirok etish kafolatlanadi.",
      "Simli qurilmada o'n ikkita tugma mavjud. Javob vaqti 1ms. Bu o'zgaruvchan hodisalarga tezkor javob berish uchun muhimdir. Aksessuar turli sirtlarda ajoyib ishlaydi, lekin agar siz qo'shimcha ravishda markali gilam sotib olsangiz, uning imkoniyatlaridan to'liq foydalanishingiz mumkin. Bu kombinatsiya o'yinni maksimal darajada kafolatlaydi. G'ilof ergonomik va qulay, barcha tugmalar qo'lda, ularni o'yindagi voqealardan chalg'itmasdan intuitiv boshqarish mumkin.",
      "Sichqoncha 100-8000 CPI sozlanishi ruxsatga ega. Qo'shimcha Yong'in tugmasining mavjudligi turli xil yong'in rejimlarini sozlash imkoniyatini beradi. Shuningdek, siz oltita snayper rejimidan birini tanlashingiz va o'yin taktikasi talab qilganda ular o'rtasida tezda almashishingiz mumkin. Besh turdagi orqa yorug'lik oldindan o'rnatilgan. Noyob o'yin muhitini yaratish uchun moslashtirilgan yoritish effektlari qurilmada moslashtirilishi mumkin. Core 4 tizimi besh pozitsiyali kalibrlash funksiyasiga, oltita innovatsion snayper rejimiga va bitta tugma bilan ko‘p funksiyalilikni sozlash imkoniyatiga kirish imkonini beradi.",
      "Kabelning uzunligi geymer hech qanday cheklovlarni his qilmasligi va o'yin jarayoniga to'liq kirib borishi uchun etarli. 125 ~ 2000 Gts ovoz berish tezligi va 100 ~ 8000 CPI ruxsati bilan siz har bir o'yinda eng yaxshi natijalarga erishishingiz va har doim raqiblaringizdan ustun turishingiz mumkin.",
    ],
    category: {
      categoryName: "Elektronika",
      categoryImage: electronics,
      categoryColors: ["blue-100", "blue-300"],
    },
    price: 40, // dollars are determined
    discount: 0.2,
    discountPrice: function () {
      return this.price - this.price * this.discount;
    },
    howMuchDiscount: function () {
      return 100 * this.discount;
    },
    images: [
      BloodyJ90SOyinSichqonchasi1,
      BloodyJ90SOyinSichqonchasi2,
      BloodyJ90SOyinSichqonchasi3,
      BloodyJ90SOyinSichqonchasi4,
    ],
    colors: [
      {
        colorName: "Qora",
        active: true,
        image: 0,
        theRest: 8,
      },
    ],
    countProduct: 1,
    reservations: 8,
    rating: 3.6,
    saved: false,
    isItNew: true,
    top: true,
  },
  {
    id: randomId(),
    productName: "iPhone 14 Pro",
    description: [
      "iPhone 14 Pro ni qo'lingizga olganda eng yaxshilarning orasidagi eng yaxshisini ushlab turganingizni tushunasiz. Apparat va dasturiy qismlar bir-biri bilan to'g'ri va uyg'un moslashgani benuqson foydalanish tuyg'usini beradi. Apple taklif etadigan yuqori darajadagi xavfsizlik va ishonchlilik sizdagi ishonchni orttiradi.",
      "iPhone 14 Pro sizga kun bo'yi va quvvat olishga rozetka qidirmasdan to'xtovsiz bog'lanish va uzluksiz xursandchilik qilish imkonini beradi. Uning sig'imi katta 4323 мАs li akkumulyatori jihoz ko'p vaqt ishlashini ta'minlab sizga shoshilmasdan ayfoningizning hamma imkoniyatini o'rganish imkoniyatini beradi.",
      "Aylana chetli zamonaviy va go'zal dizayn, jilolangan jarrohlik po'latidan yasalgan 160,7 x 77,6 x 7,85 mm o'lchamli mustahkam korpusi sizga hashamat va noziklik tuyg'usini beradi.",
      "iPhone 14 Pro bilan ilg'or texnologiyalarning barcha afzalliklaridan bahra olasiz. iPhone 14 Pro Max ning foydalanishni xavfsiz va oson qiladigan Face ID funksiyasi bor. Endi qiyin yashirin so'zlarni eslab qolishingiz shart bo'lmaydi —ekranga qarasangiz bo'ldi, telefon bir zumda blokdan chiqadi.",
    ],
    category: {
      categoryName: "Telefonlar",
      categoryImage: telephones,
      categoryColors: ["purple-100", "purple-300"],
    },
    price: 1600, // dollars are determined
    discount: 0.2,
    discountPrice: function () {
      return this.price - this.price * this.discount;
    },
    howMuchDiscount: function () {
      return 100 * this.discount;
    },
    images: [iPhone14ProQora, iPhone14ProTilla, iPhone14ProBinafsha],
    colors: [
      {
        colorName: "Qora",
        active: true,
        image: 0,
        theRest: 23,
      },
      {
        colorName: "Tilla",
        active: false,
        image: 1,
        theRest: 45,
      },
      {
        colorName: "Binafsha",
        active: false,
        image: 2,
        theRest: 34,
      },
    ],
    countProduct: 1,
    reservations: 9,
    rating: 5,
    saved: false,
    isItNew: true,
    top: true,
  },
  {
    id: randomId(),
    productName: "O'yin kompyuteri Transformers",
    description: [
      "RGB yoritgichli o'yin qutisi",
      "Protsessor Intel® Core™ i5-12400F 18 MB kesh, 4,40 gigagertsgacha Jami yadrolar - 6, jami iplar - 12",
      "Sovutgich: tdp120 RGB",
      "MB: H610 - 12-avlod Intel® Core™ protsessorlari va 13-avlod Intel® Processors™ protsessorlarini (LGA1700) qo'llab-quvvatlaydi",
      "SSD1: 128 GB (Windows o'rnatilgan)",
      "SSD2: 512GB NVMe M.2 (oʻyinlar yoki dasturlar uchun) oʻqish tezligi 3500 MB/s gacha)",
      "RAM: DDR4 16GB - 2 dona 8gb 3200mhz (vaqtinchalik xotira)",
      "VGA: Aks - 8GB ATI Radeon RX580 128Bit GDDR5 - har qanday o'yinlar, har qanday dasturlar.",
      "CASE: FC TRANSFORMERS.",
      "PSU: 750w",
      "Windows 10 da Windows 7 (start) ga o'xshash sozlamalar bilan yangi tizim o'rnatildi.",
      "Barcha mahalliy DRIVERLAR, shuningdek, ofis ishlari uchun zarur dastlabki dasturlar (WORD - EXCEL), shu jumladan o'rnatilgan.",
      "Kompyuter ham kuchli o'yinlar, ham grafik ishlari uchun mos.",
      "ShK yig'ilgan kundan boshlab olti oygacha bo'lgan kafolat, yig'ish sanasi korpus muhrida ko'rsatilgan, agar muhr buzilgan (yirtilgan, yirtilgan, shikastlangan) bo'lsa, kafolat butunlay bekor qilinadi va bo'lmaydi. yaroqli.",
    ],
    category: {
      categoryName: "Kompyuterlar",
      categoryImage: computers,
      categoryColors: ["blue-100", "blue-300"],
    },
    price: 900, // dollars are determined
    discount: 0.2,
    discountPrice: function () {
      return this.price - this.price * this.discount;
    },
    howMuchDiscount: function () {
      return 100 * this.discount;
    },
    images: [
      transformerCaseOq1,
      transformerCaseOq2,
      transformerCaseQora1,
      transformerCaseQora2,
    ],
    colors: [
      {
        colorName: "Oq",
        active: true,
        image: 0,
        theRest: 3,
      },
      {
        colorName: "Qora",
        active: false,
        image: 2,
        theRest: 4,
      },
    ],
    countProduct: 1,
    reservations: 4,
    rating: 5,
    saved: false,
    isItNew: true,
    top: true,
  },
  {
    id: randomId(),
    productName: "O'yin kompyuteri Zalman",
    description: [
      "RGB yoritgichli o'yin qutisi",
      "CPU: Intel® Core™ i5-12400F 18 MB kesh, 4,40 gigagertsgacha 6x-yadrolari 12x-oqadi",
      "Sovutgich: tdp120 RGB",
      "MB: H610 - 12-avlod Intel® Core™ protsessorlarini va 13-avlod Intel® Processor™ protsessorlarini (LGA1700) qo'llab-quvvatlaydi",
      "SSD1: 256 GB",
      "SSD2: 1000 GB NVMe M.2 O'qish tezligi 3500 MB/s gacha",
      "RAM: DDR4 32GB 2 dona x 16GB 3200MGts (vaqtinchalik xotira)",
      "VGA: GeForce® RTX 3070 - 8 GB har qanday o'yin, har qanday dastur",
      "CASE: Zalman i3 Neo 4narsalar RGB sovutgichlari",
      "PSU: DeepCool PF700 700W 80+ ATX",
      "Windows 11 da Windows 7 (start) kabi sozlamalar bilan yangi tizim o'rnatilgan",
      "Barcha mahalliy DRIVERLAR, shuningdek, ofis ishlari uchun zarur bo'lgan dastlabki dasturlar (WORD - EXCEL) o'rnatilgan",
      "Kompyuter ham kuchli o'yinlar, ham grafiklar uchun mos",
      "Kafolat - ShK yig'ilgan kundan boshlab olti oygacha, yig'ish sanasi korpusning muhrida belgilanadi, agar muhr buzilgan bo'lsa (yirtilgan, uzilgan,, buzilgan), u holda kafolat butunlay bekor qilinadi.",
    ],
    category: {
      categoryName: "Kompyuterlar",
      categoryImage: computers,
      categoryColors: ["blue-100", "blue-300"],
    },
    price: 1500, // dollars are determined
    discount: 0.2,
    discountPrice: function () {
      return this.price - this.price * this.discount;
    },
    howMuchDiscount: function () {
      return 100 * this.discount;
    },
    images: [zalmanCaseOq, zalmanCaseKulrang, zalmanCaseQora],
    colors: [
      {
        colorName: "Oq",
        active: true,
        image: 0,
        theRest: 3,
      },
      {
        colorName: "Kulrang",
        active: true,
        image: 1,
        theRest: 3,
      },
      {
        colorName: "Qora",
        active: false,
        image: 2,
        theRest: 4,
      },
    ],
    countProduct: 1,
    reservations: 12,
    rating: 5,
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

export const categoryProduct = category.map((item) => {
  let productIndex = products.find((product) => {
    return product.category.categoryName == item;
  });
  let product = {
    id: randomId(),
    category: item,
    image: productIndex.category.categoryImage,
    color: productIndex.category.categoryColors,
  };
  console.log(productIndex);
  return product;
});

export const savedProduct = (product) => {
  product.saved = !product.saved;
};

export let siteLanguage = "UZB";
