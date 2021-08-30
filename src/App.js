  import './App.css';
  import fondo from '../public/fondo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Noti Futbol</title>
      </header>
      <table>
        <tr>
          <td>
            <img src={fondo} alt="fondo" />
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>

    </div>
  );
}

export default App;
