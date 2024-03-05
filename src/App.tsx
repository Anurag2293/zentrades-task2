import { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"

export const AuthenticateContext = createContext<any>(null)

function App() {
	const [authenticated, setAuthenticated] = useState(false)
	return (
		<AuthenticateContext.Provider value={{authenticated, setAuthenticated}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</AuthenticateContext.Provider>
	)
}

export default App