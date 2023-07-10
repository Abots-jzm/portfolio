import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import CaseStudy from "./pages/CaseStudy";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/projects/:projectName" element={<CaseStudy />} />
			</Route>
		</Routes>
	);
}

export default App;
