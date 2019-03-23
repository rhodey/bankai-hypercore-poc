# bankai-min

## Steps to reproduce
```
$ npm install
$ npm start
$ echo "visit https://localhost:8080 in browser and notice no errors in console."
$ npm run build && cd dist
$ python -m SimpleHTTPServer 8080
$ echo "visit http://localhost:8080 in browser and notice require is buggy."
```

## Notes
If you remove `require('hypercore')` from 'views/main.js` and then re-build and reload the webpage you will notice the error message has disappeared. I have only been able to reproduce this behviour using npm modules `hypercore` and `hyperdb`.
