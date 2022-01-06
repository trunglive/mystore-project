#### My Store Project

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

#### Summary
> In this project, I will use Angular to create a simple single-page e-commerce application called MyStore.
> The application will include a variety of Angular components that communicate with one another, such as a product list component that displays a list of items for which a user can shop.
> The mock data is generated from the provided static json file, and the items are then rendered into the page.

#### App components
+ Product list `product-list`: list of all product items on homepage
+ Product item `product-item`: single component that makes up product list
+ Product item detail `product-item-detail`: detail of product when users navigate to single product with specific id
+ Nav bar `nav-bar`: navigation bar that stays on top of every route
+ Favorite button `favorite-button`: favorite icon in product item detail that helps users save their favorite products
+ Cart `cart`: checkout form with form validation (left) and cart list (right)
+ Confirmation `confirmation`: confirmation page after successful checkout
+ Page not found `page-not-found`: 404 error page

#### App specifics
##### Model:
+ Product
+ Favorite Product 

##### Service:
+ Product
+ Favorite Product
+ Cart

##### Routing:
+ `/`: homepage 
+ `/product/:productId`: product item detail page 
+ `/cart`: cart checkout page 
+ `/success`: confirmation page
+ `**`: wild card - 404 error page

#### Run the project

Run `ng serve` OR `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build the project

Run `ng build` OR `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Screenshot
![screenshot for product cart](src/assets/homepage-screenshot.png)
![screenshot for product list in homepage](src/assets/checkout-form-screenshot.png)
