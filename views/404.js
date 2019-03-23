const html = require('choo/html')

module.exports = view
function view (state, emit) {
  return html`
    <body>
      <h1>404</h1>
      <a href="/">home</a>
    </body>
  `
}
