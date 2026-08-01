import { defineThemeConfig } from '@utils/defineThemeConfig'

export default defineThemeConfig({
  name: 'HPE Activity Hub',
  id: 'hpe-activity-hub',
  seo: {
    title: 'HPE Activity Hub',
    description: 'Inclusive health and physical education activities, teaching resources, and classroom tools.',
    author: 'HPE Activity Hub',
    image: '/social-preview-image.png',
  },
  colors: {
    primary: '#2e2f5b',
    secondary: '#91adda',
    neutral: '#5b5d86',
    outline: '#2e2f5b',
  },
  navigation: {
    darkmode: true,
    items: [
      { type: 'link', label: 'Home', href: '/' },
      { type: 'link', label: 'Units', href: '/units' },
      { type: 'link', label: 'Teacher resources', href: '/teach' },
      { type: 'link', label: 'Classroom tools', href: '/tools' },
    ],
  },
})
