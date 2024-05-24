const {
  FONT_FAMILY,
  FONT_SIZES,
  FONT_H1,
  FONT_H1_MOBILE,
  FONT_FORM,
  FONT_DISCLAIMER,
  FONT_DISCLAIMER_MOBILE,
} = require('./src/utils/theme/font')
const { SITE_COLOR } = require('./src/utils/theme/color')
const { CONTAINER_SIZES } = require('./src/utils/theme/container')
const { ROUNDED } = require('./src/utils/theme/rounded')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  container: CONTAINER_SIZES,
  theme: {
    extend: {
      colors: {
        ...SITE_COLOR,
      },
      lineHeight: {
        hero: '4.5rem',
      },
      fontFamily: {
        sans: [FONT_FAMILY, 'sans-serif'],
        heading: [FONT_FAMILY, 'sans-serif'],
      },
      borderRadius: ROUNDED,
      fontSize: {
        ...FONT_SIZES,
        h1: [
          FONT_H1.fontSize,
          {
            lineHeight: FONT_H1.lineHeight,
            fontWeight: FONT_H1.fontWeight,
          },
        ],
        'm-h1': [
          FONT_H1_MOBILE.fontSize,
          {
            lineHeight: FONT_H1_MOBILE.lineHeight,
            fontWeight: FONT_H1_MOBILE.fontWeight,
          },
        ],

        disclaimer: [
          FONT_DISCLAIMER.fontSize,
          {
            lineHeight: FONT_DISCLAIMER.lineHeight,
            fontWeight: FONT_DISCLAIMER.fontWeight,
          },
        ],
        'm-disclaimer': [
          FONT_DISCLAIMER_MOBILE.fontSize,
          {
            lineHeight: FONT_DISCLAIMER_MOBILE.lineHeight,
            fontWeight: FONT_DISCLAIMER_MOBILE.fontWeight,
          },
        ],
        form: [
          FONT_FORM.fontSize,
          {
            lineHeight: FONT_FORM.lineHeight,
            fontWeight: FONT_FORM.fontWeight,
          },
        ],
      },
    },
  },
  plugins: [],
}