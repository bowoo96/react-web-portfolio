import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/commons/PrivateRoute";
import Layout from "./components/commons/Layout";
import ContextApiProvider from "./store/context";
import Customer1Page from "./pages/Customer1Page";
import NewPost1Page from "./pages/NewPost1Page";
import Detail1Page from "./pages/Detail1Page";
import UpdatePost1Page from "./pages/UpdatePost1Page";


function App() {
    return (
        <ContextApiProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<LoginPage name={"Login"} />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/customer1/*" element={<Customer1Page name={"Customer1Page"} />} />
                        <Route path="/customer1/newpost1" element={<NewPost1Page />} />
                        <Route path="/customer1/update1" element={<UpdatePost1Page />} />
                        <Route path="/customer1/detail1" element={<Detail1Page name={"Detail1"} />} />
                    </Route>
                </Routes>
            </Layout>
        </ContextApiProvider>
    );
}

export default App;
