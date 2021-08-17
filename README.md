# SendBird app configuration

1. Go to index.tsx and update appId
2. UserId in the demo app you can hardcode however userId should reflect actual user of the application

# Webpack configuration
1. If you want to include app to specific Dynamics 365 solution you need to firstly change prefix of the files.
2. Go to webpack.config.js, change value of dynamicsSolutionPrefix const to your solution prefix.

# Building
1. Dev build => npm run build:dev
2. Production build npm run build

# Deployment
1. Go to make.powerapps.com
2. Go to your solution
3. Add webresources that you can find in dist folder after build. 