import React from 'react'
import {useRoutes} from "./routes/index.router";
import Sidebar from "./components/sidebar/Sidebar";

function App() {

    const authentication:boolean = true
    const routes = useRoutes(authentication)

  return (
    <React.Fragment>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <div style={{display: 'flex'}}>
                {
                    authentication && <Sidebar />
                }
                <div className='routes-wrapper'>
                    {routes}
                </div>
            </div>
        </React.Suspense>
    </React.Fragment>
  )
}

export default App