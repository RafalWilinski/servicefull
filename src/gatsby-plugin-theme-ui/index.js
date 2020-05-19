import wavesTheme from 'gatsby-theme-waves/src/gatsby-plugin-theme-ui/index'
import deepmerge from 'deepmerge'

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    secondary: '#888',
  },
  styles: {
    CodeSurfer: {
      pre: {
        // color: 'text',
        backgroundColor: 'background',
      },
      code: {
        // color: 'text',
        backgroundColor: 'background',
      },
      tokens: {
        'builtin changed punctuation operator tag deleted attr-value char number inserted': {
          color: 'primary',
        },
        'line-number': {
          opacity: 0.8,
        },
        'string attr-value': {
          color: '#e3116c',
        },
        'punctuation operator': {
          color: '#393A34',
        },
        'comment prolog doctype cdata': {
          color: '#999988',
          fontStyle: 'italic',
        },
        'entity url symbol number boolean variable constant property regex inserted': {
          color: '#36acaa',
        },
        'function deleted tag': {
          color: '#d73a49',
        },
        'atrule keyword attr-name selector': {
          color: '#00a4db',
        },
        method: {
          color: '#6f42c1',
        },
      },
      title: {
        backgroundColor: 'background',
        color: 'text',
      },
      subtitle: {
        color: '#d6deeb',
        backgroundColor: 'rgba(10,10,10,0.9)',
      },
      unfocused: {
        // only the opacity of unfocused code can be changed
        opacity: 0.1,
      },
      plain: {
        color: '#393A34',
        backgroundColor: '#f6f8fa',
      },
      styles: [
        {
          types: ['namespace'],
          style: {
            opacity: 0.7,
          },
        },

        {
          types: ['function', 'deleted', 'tag'],
          style: {
            color: '#d73a49',
          },
        },
        {
          types: ['function-variable'],
          style: {
            color: '#6f42c1',
          },
        },
        {
          types: ['tag', 'selector'],
          style: {
            color: '#00009f',
          },
        },
      ],
    },
    waves: {
      default: {
        Wave: {
          width: ['100%', '960px'],
          marginTop: '40px',
          marginLeft: [0, 'calc(40% - 400px)'],
          marginBottom: '40px',
          position: 'relative',
          display: ['block', 'flex'],
        },
        ScrollerContainer: {
          flex: 1,
          paddingLeft: [0, '50px'],
          paddingTop: ['50px', 0],
        },
        ScrollerStep: {
          position: 'relative',
          padding: [0, '0 10px'],
          minHeight: '250px',
          display: 'flex',
          alignItems: 'center',
          borderLeft: ['none', '3px solid transparent'],
        },
        ScrollerProgress: {
          position: 'absolute',
          left: ['-12px', '-3px'],
          backgroundColor: 'primary',
        },
        StickerContainer: {
          width: ['100vw', '60%'],
          marginLeft: ['calc(50% - 50vw)', 0],
          position: ['sticky', 'static'],
          top: [0, 'auto'],
          zIndex: [1, 'auto'],
          height: ['50vh', 'auto'],
        },
        Sticker: {
          position: ['static', 'sticky'],
          width: '100%',
          height: ['100%', '60vh'],
          top: ['auto', '20vh'],
          border: ['none', 'none'],
          borderColor: 'secondary',
          boxShadow: '22px 22px 44px #d9d9d9, -22px -22px 44px #ffffff',
        },
        // this is used to select the active scroller step
        // 0.5 selects the step that is at half the screen height
        // 0.7 the step that is at 70% the screen height
        focus: [0.7, 0.45],
      },
    },
  },
}

export default deepmerge(theme, theme)
