const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "jet-black": "#13181F",
      "earth-green": "#0CD691",
      "dark-gray": "#949494",
      "red-velvet": "#FE3A30",
      "off-red": "#FCECEF",
      "deepsky-blue": "#08C8F9",
      "off-blue": "#EFF5FB",
      "soft-gray": "#EDEDED",
      "off-gray": "#FAFAFA",
    },
  },
  plugins: [],
});
