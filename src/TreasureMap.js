import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Register } from "./components/auth/Register"
import { Explore } from "./components/explore/Explore"
import { Login } from "./components/auth/Login"
import { Home } from "./components/home/Home"




export const TreasureMap = () => {
	return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="*"
        element={
          <Authorized>
            <>
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
}

