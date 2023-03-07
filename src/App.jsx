import './App.css'
import back1 from './back.svg';
import back2 from './back2.svg';

export default function App() {
  return (
    <div class="whole">
      <main
        style={{ backgroundImage: `url(${back1})`, backgroundSize: '100% auto' }}>
        <div>
          <div class="name"
            style={{ height: '50px' }}>AMBROSIA</div>
          <div class="credit">Amukh1</div>
        </div>
      </main>
      <div class="next"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: 'cover', height: '100vh' }}>
        <div class="name">Next-gen <div></div>
          Programming</div>
        <div class="codebox"><p>{`function ambrosia() {`} <br />
          {`println("food for the gods");`}
          <br />
          {`}`}
          <br />
          <br />
          {`ambrosia();`}</p></div>
      </div>
    </div>
  )
}

function code() {
  return "hh \nhhh"

  // {`function ambrosia() {`} <br/>
  //         {`println("food for the gods");`}
  //          <br/>
  //         {`}`}
  //          <br/>
  //          <br/>
  //         {`ambrosia();`}
}