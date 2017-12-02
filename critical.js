const critical = require('critical')

critical
  .generate({
    inline: true,
    base: './',
    src: 'index.dev.html',
    dest: 'index.html',
    dimensions: [
      {
        width: 320,
        height: 568,
      },
      {
        width: 1280,
        height: 800,
      },
    ],
    inlineImages: true,
    minify: true,
    ignore: ['@font-face', '@import'],
  })
  .then(output => console.log(output))
  .catch(err => console.log(err))
