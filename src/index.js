import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { TreasureMap } from "./TreasureMap"
import { NavBar } from "./components/nav/NavBar"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
      <div>
        <NavBar />
        <TreasureMap />
      </div>
    </BrowserRouter>
)
