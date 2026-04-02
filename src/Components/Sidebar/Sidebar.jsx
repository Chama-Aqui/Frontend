import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { use } from 'react';


export function Sidebar() {

    const navigation = useNavigate();

    return(
        <div className='all-sidebar'>



        <img src="./public/Logop.png" className='logo-sidebar'/>


        {/* boxs */}

        <div className='wall-sidebar'></div>
        

        {/* buttons */}
        <div className='bt-sidebar'>
            <button type='button' onClick={() => navigation("/home")} className='b-sidebar' >Início</button>
            <button type='button' onClick={() => navigation("")} className='b-sidebar' >Solicitações</button>
            <button type='button' onClick={() => navigation("")} className='b-sidebar' >Serviços</button>
            <button type='button' onClick={() => navigation("/perfil")} className='b-sidebar' >Perfil</button>
            <button type='button' onClick={() => navigation("/")} className='b-sidebar' >Sair</button>
        </div>


        </div>
    )
};