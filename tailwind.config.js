/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        neutral: {
          background: {
            weak: 'var(--neutral-background-weak)',
            medium: 'var(--neutral-background-medium)',
            strong: 'var(--neutral-background-strong)'
          },
          solid: {
            weak: 'var(--neutral-solid-weak)',
            medium: 'var(--neutral-solid-medium)',
            strong: 'var(--neutral-solid-strong)'
          }
        },
        brand: {
          background: {
            weak: 'var(--brand-background-weak)',
            medium: 'var(--brand-background-medium)',
            strong: 'var(--brand-background-strong)'
          },
          solid: {
            weak: 'var(--brand-solid-weak)',
            medium: 'var(--brand-solid-medium)',
            strong: 'var(--brand-solid-strong)'
          }
        },
        // Status colors
        info: {
          background: {
            weak: 'var(--info-background-weak)',
            medium: 'var(--info-background-medium)',
            strong: 'var(--info-background-strong)'
          }
        },
        success: {
          background: {
            weak: 'var(--success-background-weak)',
            medium: 'var(--success-background-medium)',
            strong: 'var(--success-background-strong)'
          }
        },
        warning: {
          background: {
            weak: 'var(--warning-background-weak)',
            medium: 'var(--warning-background-medium)',
            strong: 'var(--warning-background-strong)'
          }
        },
        danger: {
          background: {
            weak: 'var(--danger-background-weak)',
            medium: 'var(--danger-background-medium)',
            strong: 'var(--danger-background-strong)'
          }
        }
      },
      fontFamily: {
        display: ['var(--font-family-heading)'],
        heading: ['var(--font-family-heading)'],
        body: ['var(--font-family-body)'],
        label: ['var(--font-family-label)'],
        code: ['var(--font-family-code)']
      },
      fontSize: {
        // Display sizes
        'display-xs': 'var(--font-size-display-xs)',
        'display-s': 'var(--font-size-display-s)',
        'display-m': 'var(--font-size-display-m)',
        'display-l': 'var(--font-size-display-l)',
        'display-xl': 'var(--font-size-display-xl)',
        // Body sizes
        'body-xs': 'var(--font-size-body-xs)',
        'body-s': 'var(--font-size-body-s)',
        'body-m': 'var(--font-size-body-m)',
        'body-l': 'var(--font-size-body-l)',
        'body-xl': 'var(--font-size-body-xl)'
      },
      fontWeight: {
        'display-default': 'var(--font-weight-display-default)',
        'display-strong': 'var(--font-weight-display-strong)',
        'body-default': 'var(--font-weight-body-default)',
        'body-strong': 'var(--font-weight-body-strong)'
      },
      lineHeight: {
        'display': {
          xs: 'var(--line-height-display-xs)',
          s: 'var(--line-height-display-s)',
          m: 'var(--line-height-display-m)',
          l: 'var(--line-height-display-l)',
          xl: 'var(--line-height-display-xl)'
        },
        'body': {
          xs: 'var(--line-height-body-xs)',
          s: 'var(--line-height-body-s)',
          m: 'var(--line-height-body-m)',
          l: 'var(--line-height-body-l)',
          xl: 'var(--line-height-body-xl)'
        }
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        s: 'var(--shadow-s)',
        m: 'var(--shadow-m)',
        l: 'var(--shadow-l)',
        xl: 'var(--shadow-xl)'
      },
      screens: {
        s: {'max': 'var(--breakpoint-s)'},
        m: {'max': 'var(--breakpoint-m)'},
        l: {'max': 'var(--breakpoint-l)'}
      }
    }
  },
  plugins: []
}