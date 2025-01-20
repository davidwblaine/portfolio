import headshot from './headshot.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name-main'>David Blaine</h1>
        <div classname= 'headshot'>
        <img src= {headshot} className='img'/>
        </div>
        <p className='description-main'>I am a graduate of Towson University and a junior software delvoper 
          deeply engaged with working with people. Away from my desk I enjoy playing chess, 
          spending time with loved ones, traveling, and staying active through biking and rock climbing </p>
      </header>
    </div>
  );
}

export default App;
