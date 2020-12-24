## Microfrontend Architecture

### Check out the [DEMO](https://dspktaf2erql7.cloudfront.net/)

### To run in dev
1. Clone the project
2. Run the 4 apps like following
`
cd packages/auth
`
`
npm start
` ...

### 4 Apps no matter the tools and techs
1. Container app to gather the entire project (React 17)
2. Authentication app for authentication (React 17)
3. Marketing app for content (React 17)
4. Dashboard app for authenticated users (Vue 3)

___
Used Webpack federation to delegate with separated apps 

Discovered an amount of gotchas appearing in microfrontend architecture, and took care

Shown both isolated and full dev runtime flows

Used different techniques and workarounds to get the entire app working on production
