// const miConstante = <h3>Hi Team</h3>;
import language from "../js/lang.json";
const Portada = () => {
  return (
    <div>
      {/* {miConstante} */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h5 align="left">English: {language.en.portada}.</h5>
      <hr></hr>

      <h5>Català: {language.ca.portada}.</h5>
      <hr></hr>

      <h5>Castellano: {language.es.portada}.</h5>
      <hr></hr>
      <h5>Français: {language.fr.portada}.</h5>
    </div>
  );
};
export default Portada;
