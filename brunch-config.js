exports.config = {
  files: {
    stylesheets: {
      joinTo: '/app.css'
    },
    javascripts: {
      joinTo: '/app.js'
    }
  },
  plugins: {
    postcss: {
      processors: [require('autoprefixer')]
    }
  }
};
