To setup react-router-dom v6, use this configuration

    npm install react-router-dom@6 -S

```js
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
```

outside the functional Component create a variable router using const

```js
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/test'>
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
    </Route>

    <Route
      path='*'
      element={<Error />}
    />
  </>
));
```