import React from 'react'
import {useRoutes} from "./routes/index.router";

function App() {

    const authentication:boolean = false
    const routes = useRoutes(authentication)

  return (
    <div>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            {routes}
        </React.Suspense>
    </div>
  )
}

export default App