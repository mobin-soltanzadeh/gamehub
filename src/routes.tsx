import { RouteObject } from "react-router-dom"
import GameHub from "./pages/GameHub"
import LoginPage from "./pages/LoginPage"

let routes: RouteObject[] = [
  {path: "/gamehub", element: <GameHub />},
  {path: "gamehub/login", element: <LoginPage />},
  {path: "/*", element: <h1>not found</h1>},
]

export default routes