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


#### Follow-up Questions
1. How long did you spend on the test?
2. What would you add if you had more time?
    - Make a pay confirmation page.
    - Optimise layout for mobile screens.
3. How would you improve the product APIs that you had to consume? 
    - Include promotions on the product object on fetch all products call. Customers like to know that there is a promotion available when browsing.
    - Include images on the individual product call.
4. What did you find most difficult?
    - Deciding where to make the promotion calculations in terms of the components.
5. How did you find the overall experience, any feedback for us?
    - Quite fun exercise.
    - I had to add a header to the API to run both the app and API locally. 