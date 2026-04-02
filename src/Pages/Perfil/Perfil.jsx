import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './Perfil.css';

export function Perfil(){

    return(
        <div className='all-perfil'>
            

            {/* components */}
            
            <div className='componet-perfil'>
                <Sidebar />
            </div>
            

            {/* dados */}
            <div className='container-perfil'>
                <div className='card-perfil'>
                    <p className='info-perfil'>
                        Nome:
                        Email:
                        CPF:
                    </p>
                </div>
            </div>
              

        </div>
    )
};