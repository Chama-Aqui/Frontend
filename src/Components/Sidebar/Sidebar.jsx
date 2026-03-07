import './Sidebar.css';


export function Sidebar() {

    return(
        <div className='all-sidebar'>







        {/* boxs */}

        <div className='wall-sidebar'></div>


        {/* buttons */}
        <div className='bt-sidebar'>
            <button type='button' className='b-sidebar' >Início</button>
            <button type='button' className='b-sidebar' >Solicitações</button>
            <button type='button'className='b-sidebar' >Serviços</button>
            <button type='button'className='b-sidebar' >Perfil</button>
            <button type='button'className='b-sidebar' >Sair</button>
        </div>


        </div>
    )
};