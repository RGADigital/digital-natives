const {
  FONT_BODY,
  FONT_BODY_MOBILE,
  FONT_EYEBROW,
  FONT_EYEBROW_MOBILE,
  FONT_FAMILY,
  FONT_SIZES,
  FONT_H1,
  FONT_H1_MOBILE,
  FONT_H3_MOBILE,
  FONT_FORM,
  FONT_DISCLAIMER,
  FONT_DISCLAIMER_MOBILE,
  FONT_QUOTE,
  FONT_QUOTE_MOBILE,

  FONT_NAV,
  FONT_NAV_MOBILE,
} = require('./src/utils/theme/font')
const { SITE_COLOR } = require('./src/utils/theme/color')
const { CONTAINER_SIZES } = require('./src/utils/theme/container')
const { ROUNDED } = require('./src/utils/theme/rounded')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  container: CONTAINER_SIZES,
  theme: {
    extend: {
      backgroundImage: {
        'gr-pink-yellow': 'linear-gradient(270deg, #FF00FF 0%, #FFFF00 137.76%)',
        'gr-pink-yellow-2': 'linear-gradient(180deg, #FF00FF 0%, #FF00FF 60.26%, #FFFF00 101.25%)',
        'gr-pink-white': 'linear-gradient(360deg, #F0F 0%, rgba(255, 0, 255, 0.00) 100%)',
        'gr-green-white': 'linear-gradient(90deg, #0F0 0%, #00FFFF 100%)',
      },
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
      gridTemplateColumns: {
        '6': 'repeat(6, 1fr)',
        '12': 'repeat(12, 1fr)',
      },
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
        nav: [
          FONT_NAV.fontSize,
          {
            lineHeight: FONT_NAV.lineHeight,
            fontWeight: FONT_NAV.fontWeight,
            letterSpacing: FONT_NAV.letterSpacing,
          },
        ],
        'm-nav': [
          FONT_NAV_MOBILE.fontSize,
          {
            lineHeight: FONT_NAV_MOBILE.lineHeight,
            fontWeight: FONT_NAV_MOBILE.fontWeight,
            letterSpacing: FONT_NAV.letterSpacing,
          },
        ],
        eyebrow: [
          FONT_EYEBROW.fontSize,
          {
            lineHeight: FONT_EYEBROW.lineHeight,
            fontWeight: FONT_EYEBROW.fontWeight,
            letterSpacing: FONT_EYEBROW.letterSpacing,
          },
        ],
        'm-eyebrow': [
          FONT_EYEBROW_MOBILE.fontSize,
          {
            lineHeight: FONT_EYEBROW_MOBILE.lineHeight,
            fontWeight: FONT_EYEBROW_MOBILE.fontWeight,
            letterSpacing: FONT_EYEBROW.letterSpacing,
          },
        ],
        form: [
          FONT_FORM.fontSize,
          {
            lineHeight: FONT_FORM.lineHeight,
            fontWeight: FONT_FORM.fontWeight,
          },
        ],
        body: [
          FONT_BODY.fontSize,
          {
            lineHeight: FONT_BODY.lineHeight,
            fontWeight: FONT_BODY.fontWeight,
          },
        ],
        'm-body': [
          FONT_BODY_MOBILE.fontSize,
          {
            lineHeight: FONT_BODY_MOBILE.lineHeight,
            fontWeight: FONT_BODY_MOBILE.fontWeight,
          },
        ],
        'm-h3': [
          FONT_H3_MOBILE.fontSize,
          {
            lineHeight: FONT_H3_MOBILE.lineHeight,
            fontWeight: FONT_H3_MOBILE.fontWeight,
          },
        ],
        quote: [
          FONT_QUOTE.fontSize,
          {
            lineHeight: FONT_QUOTE.lineHeight,
            fontWeight: FONT_QUOTE.fontWeight,
          },
        ],
        'm-quote': [
          FONT_QUOTE_MOBILE.fontSize,
          {
            lineHeight: FONT_QUOTE_MOBILE.lineHeight,
            fontWeight: FONT_QUOTE_MOBILE.fontWeight,
          },
        ],
      },
    },
  },
  plugins: [],
}
