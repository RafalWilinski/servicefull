import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Manrope'],
  bodyFontFamily: ['Manrope'],
  googleFonts: [
    {
      name: 'Manrope',
      styles: ['400', '600', '800'],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography
