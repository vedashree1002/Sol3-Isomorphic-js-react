# React Server Side Rendering

Install dependencies with
```npm i```

Run dev mode with
```npm run dev```

Now open the browser and navigate to `http://localhost:3000` . 

Solution for this question would be to use server side rendering and the API / data pull is from the server rather than retrieving on the client .The API request is outside of React's component rendering cycle and fetching data before we render the component by using isomorphic fetch .

hydrate() on the client side is used to hydrate the application.

API Used: http://api.openweathermap.org
div is used to alert the temperature of the city inputted by the user ( none of the values are hardcoded , everything is dynamic)

Please view the snapshots attached as well !


