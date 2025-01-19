import { useEffect } from "react";
import "./App.css";


const tg = window.Telegram.WebAppж

function App() {



  useEffect(() => {
    tg.ready(); // этот метод сообщает о том, что приложение готово к работе оно проинициализировалось
  }, []);


  console.log();
  

  return (
    <>
    Просто все привет, кого не видел
    <button onClick={() => {tg.close()}}>Закрыть приложение</button>
    </>
);
}

export default App;
