import { BrowserRouter,Routes,Route } from "react-router";
import Principal from "./pages/principal";import Adm from "./pages/adm";
import Inicio from "./pages/inicio";

 export default function Navegar(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Principal/>}/>
                <Route path="/adm" element ={<Adm/>}/>
                <Route path="/inicio" element ={<Inicio/>}/>
            </Routes>
        </BrowserRouter>
    )
 }