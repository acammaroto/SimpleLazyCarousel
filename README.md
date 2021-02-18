# Conte.it App

The app present a carousel with width/heigth 100% inside a fluid container.
The app use two different array to approach lazy loading. One array is the database of the images, the other one is the array of images actually displayed by the carousel. Every time the user interact with the arrow, a new image will be added into the carousel array and loaded. In this way the images will be loaded only one time and only when they are needed.
## Test suite
### LoginService
1. Should return a database array of images
2. Should return an array with the single fist image
### AppComponent
1. Should create the app
2. Should the app have a carousel image array with a single element
3. When the user go to the next image, the carousel image should contain the new image and the image should be loaded
4. Should the app have a database image array with multiple elements
5. When the user consumed all the images and continue to navigate, the carousel images shouldnt be modiied and the images shouldnt be reloaded
## Cypress

I didn't know Cypress before today. So I studied a little bit the docs and made a very simple test suite. Probably it cloudn't be enough but at least I tried! 🤓


Thank you for this opportunity.