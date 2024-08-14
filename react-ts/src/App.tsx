import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./Components/MainPage.tsx";

function App() {
	return (
		<>
			<ChakraProvider>
				<Router>
					<Routes>
						<Route path="/" element={<MainPage initCount={0} />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</>
	);
}

export default App;
