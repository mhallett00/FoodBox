# F O O D B O X

A food oriented e-commerce application built on React, Express, and PostgreSQL.

!["Screenshot of the homepage, display size < 1024px"](https://raw.githubusercontent.com/mhallett00/FoodBox/master/public/images/homepage.png)

## Project Concept

With Foodbox, we're trying to modernize the concept of the world's oldest meal delivery system. Inspired by the Dabbiwallas of Bombay, FoodBox aim to create a medium for talented home cooks to share their lovingly prepared meals with food lovers anywhere. 

!["Screenshot of the payment screen, display size < 1024px"](https://raw.githubusercontent.com/mhallett00/FoodBox/master/public/images/payment.png)

A customer can review their orer at the payment screen.

!["Screenshot of the admin product page, display size < 1024px"](https://raw.githubusercontent.com/mhallett00/FoodBox/master/public/images/selected_seller.png)

Order confirmed!

!["Screenshot of the order onfirmation screen, display size < 1024px"](https://raw.githubusercontent.com/mhallett00/FoodBox/master/public/images/order_confirmation.png)

Home cook's have extra options including a palce to review and change their menu options.

!["Screenshot of the admin product page, display size < 1024px"](https://raw.githubusercontent.com/mhallett00/FoodBox/master/public/images/selected_seller.png)

Created as a final project while at Lighthouse labs.

The FoodBox team is:

* [Jason Junio](https://github.com/jjjunio)

- [Michael Hallett](https://github.com/mhallett00)

- [Raghav Shrivastav](https://github.com/Raghav0811)

## Setup

Follow these steps in order to get FoodBox running!

1. Navigate individually into both the `/api` and `/client` subfolders

2. Install the dependencies in **both** of these folders using
    ```
    $ npm install
    ```

3. You will then need to install the Knex framework globally with 
    ```
    $ npm install knex -g
    ```

4. Create a new database for the project in PostgreSQL.

5. Setup `.env` files in both `/api` and `/client` by following their respective `.env.example`

    - **In order to charge payments you will need keys from the [Stripe](https://stripe.com/) API.**

    - **You will need a `.env` file in both the `/api` and `/client` subfolders**
    
    - The `/client/.env` requies a stripe publishable key according to the `/client/.env.example`.

    - The `/api/.env` requires a stripe secret key as well as your desired database's info according to the `/api/.env.example`.

6. From `/api` run the knex migrations and seeds

    ```
    $ knex migrate:latest
    $ knex seed:run
    ```

7. To start the project, you will need a terminal open in both `/api` and `/client`. Starting with `/api` run
    ```
    $ npm start
    ```

8. Welcome to FoodBox!

## Stripe Testing

See the [stripe documentation](https://stripe.com/docs/testing#cards) for test card numbers you can use.

## Dependencies

- react: ^16.13.1
- react-bootstrap: ^1.1.0
- react-dom: ^16.13.1
- react-geocode: ^0.2.1
- react-google-maps: ^9.4.5
- react-router-dom: ^5.2.0
- react-scripts: 3.4.1
- @react-google-maps/api: ^1.9.7
- axios: ^0.19.2
- node-sass: ^4.14.1
- Bootstrap: ^4.5.0
- stripe: ^8.69.0
- @stripe/react-stripe-js: ^1.1.2
- @stripe/stripe-js: ^1.8.0
- body-parser: ^1.19.0
- cookie-parser: ~1.4.4
- cors: ^2.8.5
- dotenv: ^8.2.0
- express: ~4.16.1
- knex: ^0.21.1
- morgan: ~1.9.1
- pg: ^8.2.1