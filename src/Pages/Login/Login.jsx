import './Login.css';


export function Login() {

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
         
            <button type='submit' className='b-login'>Entrar</button>

            </div>
        

        </div>
    )
};