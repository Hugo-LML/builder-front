import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { PluginAPI } from 'tailwindcss/types/config';

export default {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.container': {
          maxWidth: '96rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingRight: '1.25rem',
          paddingLeft: '1.25rem',
          '@screen md': {
            paddingRight: '2rem',
            paddingLeft: '2rem',
          },
        },
      });
    },
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
