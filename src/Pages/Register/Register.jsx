import { useNavigate } from 'react-router-dom';
import './Register.css';


export function Register() {

    const navigation = useNavigate();

    return(
        <div className='all-register'>

            <div className='box-register'>

            {/* entrar */}

            <div className='left-register'>
                
                <div className='text-resgister'>
                <h1 className='tleft-register'>Bem-Vindo de volta</h1>
                <p className='acess-registerr'>Acesse sua conta agora</p>
                </div>

                <button type='button' className='bleft-register' onClick={() => navigation('/')}>Entrar</button>
            </div>

            {/* formulario */}

            <div className='form-register'>

                <h1 className='t-register'>Registre-se</h1>

                <div className='inputs-register'>
                <input type='text' className='i-register' placeholder='Nome'/>
                <input type='email' className='i-register' placeholder='Email'/>
                <input type='text' className='i-register' placeholder='CPF'/>
                <input type='password' className='i-register' placeholder='Senha'/>
                <input type='password' className='i-register' placeholder='Confirmar Senha'/>
                </div>

                
                <button type='submit' className='b-register' onClick={() => alert('Registrado com sucesso!')}>Concluir</button>
                

            </div>

        </div>

        </div>
    )
};

