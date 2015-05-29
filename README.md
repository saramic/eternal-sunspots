# Eternal Sunspots

A sun heliostat powered 8x8 display matrix to celebrate light.

## TODO

  * limit README to important Node Heroku setup instructions
    * install
        npm install
        bower install
    * foreman start web
    * DEBUG=express:* foreman start web
  * mention templating engine - http://jade-lang.com/
  * link to site http://eternal-sunspots.herokuapp.com/
  * style up with http://purecss.io/
  * add database layer for users to save their own "programs"
  * document any internal services for use in "programs"
  * how to contribute section

## FEATURES TODO

  * character display
  * character edit
  * character JSON fetch
  * demo using character
  * demo using BOM api
  * Melbourne default http://eternal-sunspots.herokuapp.com/services/bom
  * http://eternal-sunspots.herokuapp.com/services/bom?state=vic&city=wangaratta
  * twitter API
    * http://www.apcoder.com/2013/10/03/twitter-bot-20-minutes-node-js/
    * https://github.com/ttezel/twit
    * https://www.npmjs.com/package/twitter
    * https://www.npmjs.com/package/node-twitter-api
  * program CRUD
  * user and permissions - to stop stuff being deleted

  * get matrix letters input
    * https://www.google.com.au/search?q=dot+matrix+alphabet&es_sm=91&tbm=isch&imgil=fzvR65_E48fT0M%253A%253BQHX8hQ_N1xxlIM%253Bhttp%25253A%25252F%25252Fwww.dreamstime.com%25252Froyalty-free-stock-photos-dot-matrix-font-image2896258&source=iu&pf=m&fir=fzvR65_E48fT0M%253A%252CQHX8hQ_N1xxlIM%252C_&usg=__fycMsE6pOmw1kKcGHYEtHd4zc3A%3D&biw=1440&bih=802&ved=0CCkQyjc&ei=KdNnVYOTDM_38QWShIKwAg#imgrc=0AssQRlqSDOsEM%253A%3BjUBfT3p6DvangM%3Bhttp%253A%252F%252Fthumbs.dreamstime.com%252Fz%252Fdot-matrix-font-2896263.jpg%3Bhttp%253A%252F%252Fwww.dreamstime.com%252Fstock-photos-dot-matrix-font-image2896263%3B1257%3B1300
## Bugs

  * active reapplied even if it is there
  * stop button

# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
