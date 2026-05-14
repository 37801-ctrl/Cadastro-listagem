import './App.css'

function App() {
  
  return (
    <>
      <main>
        <div id="esquerda">
          <img src="/src" alt="" />
        </div>

        <div id="direita">
          <h1>Activesoft</h1>
          <p>Fazer login</p>
          <label htmlFor="">Login</label>
          <input placeholder='Digite seu email...' type="text" />
          <label htmlFor="">Senha</label>
          <input placeholder='Digite sua senha...' type="password" />
          <button>ENTRAR</button>
          <a href="" className='esqueceu-senha'>Esqueceu a senha?</a>
        </div>

      </main> 
    </>
  )
}

export default App