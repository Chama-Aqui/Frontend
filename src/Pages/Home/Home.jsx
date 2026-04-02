import { Sidebar } from '../../Components/Sidebar/Sidebar'
import './Home.css'



export function Home(){

    return(
        <div className='all-home'>

        {/* component */}
        <Sidebar />

        {/* box esquerda */}

        <div className='box1-home'></div>

<div className='box2-home'>
        <div className='top-home'>
    
        <img src="./public/Logop.png" className='logo-home'/>

            <div className='text-logo'>
                <h1 className='h1-home'>CHAMA AQUI</h1>

                <div className='line'></div>

                <h2 className='h2-home'>SERVIÇOS</h2>
            </div>
        </div>

        <div className='descrição'>

        </div>
</div>

        </div>
    )
}