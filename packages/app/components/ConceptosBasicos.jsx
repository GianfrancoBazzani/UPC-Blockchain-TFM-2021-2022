import { BrowserRouter as Router, Route } from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import MenuConceptos from './MenuConceptos';

const ConceptosBasicos = () => {
  return (
    <div>
      <h2> Conceptos Básicos</h2>
      <MenuConceptos />
      {/* <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/acerca" component={Acerca} />
            <Route exact path="/contacto" component={Contacto} />
            <Route path="*" component={Error404} />
        </Switch>
      </Router> */}
    </div>
  );
};
export default ConceptosBasicos;
