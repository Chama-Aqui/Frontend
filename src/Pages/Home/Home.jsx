import { Sidebar } from '../../Components/Sidebar/Sidebar'
import './Home.css'



export function Home(){

    return(
        <div className='all-home'>



        {/* images   */}
        <img src="./public/Logop.png" className='logo-home'/>

        {/* component */}
        <Sidebar />


        </div>
    )
}