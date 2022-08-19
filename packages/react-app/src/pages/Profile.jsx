import transactions from "../js/profile.json";

//let transaction = parseInt(localStorage.getItem("transaction"));
//let transaction_etiquetas = transactions[transaction];

// import idioma2 from "../js/lang2.json"; //language es un objecte que apunta al fitxer idioma.json
// let idioma = parseInt(localStorage.getItem("idioma"));
// let idioma_etiquetas = idioma2[idioma];

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>

      <p>
        <h3>User: {transactions[0].user}</h3>

        <table class="default" border="1">
          <caption>Data</caption>

          <tr>
            <th>Date</th>
            <th>Tx1</th>
            <th>Tx2</th>
            <th>Tx3</th>
          </tr>

          <tr>
            <th>{transactions[0].date}</th>
            <td>{transactions[0].t1}</td>
            <td>{transactions[0].t2}</td>
            <td>{transactions[0].t3}</td>
          </tr>

          <h3>User: {transactions[1].user} </h3>
          <tr>
            <th>Date</th>
            <th>Tx1</th>
            <th>Tx2</th>
            <th>Tx3</th>
          </tr>
          <tr>
            <th>{transactions[1].date}</th>
            <td>{transactions[1].t1}</td>
            <td>{transactions[1].t2}</td>
            <td>{transactions[1].t3}</td>
          </tr>

          <h3>User: {transactions[2].user} </h3>
          <tr>
            <th>Date</th>
            <th>Tx1</th>
            <th>Tx2</th>
            <th>Tx3</th>
          </tr>

          <tr>
            <th>{transactions[2].date}</th>
            <td>{transactions[2].t1}</td>
            <td>{transactions[2].t2}</td>
            <td>{transactions[2].t3}</td>
          </tr>

          <h3>User: {transactions[3].user} </h3>
          <tr>
            <th>Date</th>
            <th>Tx1</th>
            <th>Tx2</th>
            <th>Tx3</th>
          </tr>
          <tr>
            <th>{transactions[3].date}</th>
            <td>{transactions[3].t1}</td>
            <td>{transactions[3].t2}</td>
            <td>{transactions[3].t3}</td>
          </tr>
        </table>
      </p>
    </div>
  );
};
export default Profile;
