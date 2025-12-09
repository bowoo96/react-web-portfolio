import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServerPage from "./pages/ServerPage";
import ServicePage from "./pages/ServicePage";
import CustomerPage from "./pages/CustomerPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./components/commons/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                {/* / => /home */}
                <Route path="/" element={<HomePage name={"Home"} />} />
                <Route path="/server" element={<ServerPage name={"Server"} />} />
                <Route path="/service" element={<ServicePage name={"Service"} />} />
                <Route path="/customer/*" element={<CustomerPage name={"Customer"} />} />
                <Route path="/customer/detail" element={<DetailPage name={"Detail"} />} />
            </Routes>
        </Layout>
    );
}

export default App;
