import { PrivateRoute } from 'components/Routes/PrivateRoute'
import { RoutesEnum } from './common/common'
import { Home, TemplateEditor, Sign } from './pages/common'
// do not use BrowserRouter for build!!!!
// todo don't forget to change routes path with '#/' when build project
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './components/common'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            index
            path={RoutesEnum.HOME}
            element={<PrivateRoute component={Home} />}
          />
          <Route
            path={RoutesEnum.TEMPLATE_HUB}
            element={<PrivateRoute component={TemplateEditor} />}
          />
          <Route path={RoutesEnum.SIGN_IN} element={<Sign />} />
          <Route path={RoutesEnum.SIGN_UP} element={<Sign />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
