import { useNavigate } from 'react-router-dom';
import './Login.css';


export function Login() {

    const navigation = useNavigate();

    return(
        <div className='all-login'>

        
        
        {/* boxs */}
        <div className='wall-login'>
            <div className='t-login'>
            <h1 className='title-login'>Login</h1>
            </div>
            

            <div className='case-login'>
            <input type="email" className='input-login' placeholder='Seu Email'/>
            <input type='password' className='input-login' placeholder='Sua Senha'></input>
            </div>


        {/* buttons */}
         
            <button type='submit' className='b-login' onClick={() => navigation('/home')}>Entrar</button>

        {/* footer */}

            <div className='footer-login'>
            <a className='a-login' href=" ">Esqueceu a senha?</a>
            <a className='a-login' onClick={() => navigation("/register")} >Criar conta</a>
            </div>


            </div>





        </div>
    )
};