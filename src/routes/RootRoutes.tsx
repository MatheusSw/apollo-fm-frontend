import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/home"
import Settings from "../pages/settings/settings"

export const RootRoutes: React.FC = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        {/*<ProtectedRoute path='/' children={<Home/>}/>*/}
        <Route path='/settings' element={<Settings />} />
        {/*<ProtectedRoute path='/settings' children={<Settings/>}/>*/}
    </Routes>
}