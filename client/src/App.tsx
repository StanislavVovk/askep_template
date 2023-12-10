import { PrivateRoute } from 'components/Routes/PrivateRoute'

import { RoutesEnum } from './common/common'
import { Home, Sign, TemplateEditor } from './pages/common'
// do not use BrowserRouter for build!!!!
// todo don't forget to change routes path with '#/' when build project

import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Layout } from './components/common'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            element={<PrivateRoute component={Home}/>}
            index
            path={RoutesEnum.TEMPLATE_HUB}
          />
          <Route
            element={<PrivateRoute component={TemplateEditor}/>}
            path={RoutesEnum.TEMPLATE_EDITOR}
          />
          <Route element={<Sign/>} path={RoutesEnum.SIGN_IN}/>
          <Route element={<Sign/>} path={RoutesEnum.SIGN_UP}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
