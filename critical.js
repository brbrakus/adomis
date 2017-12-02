const critical = require('critical')

critical
  .generate({
    inline: true,
    base: './',
    src: 'index.html',
    dest: 'public/index.html',
    width: 1300,
    height: 900,
    inlineImages: true,
  })
  .then(output => console.log(output))
  .catch(err => console.log(err))
