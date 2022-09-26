module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
      extend: {
        fontFamily: {
          gothamlight: 'gothamlight, sans-serif',
          gothammedium: 'gothammedium, sans-serif',
          gothambold: 'gothambold, sans-serif',
          luxiadisplay: 'luxiadisplay, sans-serif',
          luxiaregular: 'luxiaregular, sans-serif',
        },
        colors: {
          gold1: '#a78960',
          gold2: '#E7D6B7',
          gold3: '#F9F3E8',
          gold4: '#E5C7E2',
          fuchsia1: '#350937',
          fuchsia2: '#764E71',
          slate1: '#201e3b',
          slate2: '#645D74',
          cyan1: '#0f2e3d',
          cyan2: '#516C76',
          white1: '#f9f3e8',
        },
        backgroundImage: {
          'hero-banner': "url('../images/home/banner.jpg')",
          'slider-bg-1': "url('../images/slider/slider-1.jpg')",
          'slider-bg-2': "url('../images/slider/slider-2.jpg')",
          'slider-bg-3': "url('../images/slider/slider-3.jpg')",
          'membership-bg': "url('../images/home/membership.jpg')",
        },
        screens: {
          fourkxl: {'min': '2500px'},
          fourk: {'min': '2100px'},
          fourklg: {'min': '1800px'},
          fourkm: {'min': '1600px'},
          fourksm: {'min': '1281px'},
          maxxl: {'max': '1280px'},
          maxlg: {'max': '1024px'},
          maxdp: {'max': '992px'},
          maxmd: {'max': '768px'},
          maxsm: {'max': '640px'},
          maxxsmm: {'max': '576px'},
          maxxsml: {'max': '450px'},
          maxxsms: {'max': '375px'},
        }
      },
    },
    plugins: [],
  }
  