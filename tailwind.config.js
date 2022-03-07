const { urlAlphabet } = require("nanoid");

module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/back good.jpg')",
      }
    },
  },
  plugins: [],
}
