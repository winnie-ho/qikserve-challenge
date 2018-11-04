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
03 - Future promotions will be any variation of the three given types.
04 - More than one promotion can be redeemable on a product.


#### Follow-up Questions
1. How long did you spend on the test?
2. What would you add if you had more time?
    - Allow for new promotion additions if new types of promotion were to be introduced.
    - Build in error handling and user feedback.
    - Better tests.
    - Add end to end testing with Selenium or Katalon so can test user journey over different browsers and platforms.
    - With potentially more products, make the menu page more interesting.
    - Make CSS responsive for all screen size eventualities.
    - Make a pay confirmation page.
3. How would you improve the product APIs that you had to consume? 
    - Include promotions on the product object on fetch all products call. Customers like to know that there is a promotion available when browsing.
    - Include images on the individual product call.
4. What did you find most difficult?
    - Deciding where to make the promotion calculations in terms of the components.
    - Testing with Vue and Vuex store.
5. How did you find the overall experience, any feedback for us?
    - Quite fun exercise.
    - I had to add a header to the API to run both the app and API locally. 