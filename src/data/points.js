const irregularPoints = [
  "Andijon viloyati",
  "Toshkent viloyati",
  "Namangan viloyati",
  "Farg'ona viloyati",
  "Sirdaryo viloyati",
  "Samarqand viloyati",
  "Qashqadaryo viloyati",
  "Surxondaryo viloyati",
  "Buxoro viloyati",
  "Navoiy viloyati",
  "Xorazm viloyati",
  "Jizzax viloyati",
  "Qoraqalpog'iston respublikasi",
];

const points = irregularPoints.sort((a, b) => {
  return a.localeCompare(b);
});

export { points };
