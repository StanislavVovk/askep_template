import './styles/App.css';
import {RoutesEnum} from "./common/common";
import {Home, TemplateEditor} from "./pages/common";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ErrorComponent, Layout} from "./components/common";


function App() {
    return (
        <Layout>
            <Router>
                <Routes>
                    <Route index path={RoutesEnum.HOME} element={<Home/>} errorElement={<ErrorComponent/>}/>
                    <Route path={RoutesEnum.TEMPLATE_HUB} element={<TemplateEditor/>} errorElement={<ErrorComponent/>}/>
                </Routes>
            </Router>
        </Layout>
    );
}

export default App;
