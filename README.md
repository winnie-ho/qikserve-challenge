# qikserve-challenge

> Qikserve coding challenge

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Assumptions

01 - The API allows has "Access-Control-Allow-Origin": "*" included in it's headers.
02 - A promotion is applied once selected from the menu.

### API Improvements

01 - Include promotions on the product object on fetch all products call. Customers like to know that there is a promotion available when browsing.
02 - Include images on the individual product call.