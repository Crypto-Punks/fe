# Crypto Trades

## Front End

### Developed by Crypto Punks

### Links and Resources
* [submission PR](http://xyz.com)
* [back-end](https://crypto-trades-2020.herokuapp.com/)
* [front-end](https://crypto-trades-2020.netlify.com)
* [cron](cron-job.org)


#### Running the app


Lifecycle scripts included in crypto-punk-fe:

 * test -
    jest --verbose

 * start -
    webpack-dev-server --hot --mode development --devtool eval-source-map

available via `npm run-script`:

 * lint -
    eslint .

 * test:watch -
    npm run test -- --watchAll

 * build -
    webpack -p --devtool source-map

#### UML
[wireframes](src/images/crypto-trades-wireframes.jpg)


ToDo: 
make $ not change css on hover
change asset list to have a header saying assets, and include watch list (both on transaction page and on portfolio page)
search delete button
fix refresh and back
see more info on portfolio history chart?
change scope of graph on portfolio history chart?
