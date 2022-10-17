// const miConstante = <h3>Hi Team</h3>;
//import language from '../js/lang.json';
import ReactDOM from 'react-dom';
//import '..\index.css';

const Video =({title, description, uploadDate, duration}) = => {
  return (
    <div>
        <h3>{title}</h3>
        <div>
            <span>{duration}</span>
            <span>{uploadDate}</span>
        </div>
        <p>{description}</p>
    </div>
  )
}

const app = (
      <div>
          <h1> Desarrollo Útil</h1>
          <Video
            title ='Componentes'
            duration='25:04'
            uploadDate='25/06/22'
            description='Componentes en React'
          ></Video>
      </div>
);

const container = document.getElementById('root');
ReactDOM.render(app,container);