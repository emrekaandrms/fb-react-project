import app from "./base";
import React, { useCallback, useContext , useState} from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import "./App.css"


// const Home = () => {
const Home = () => {

  const [name, Setname] = useState('')
  
  
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { name} = event.target.elements;
      try {
        await app
          .auth()
          let ref=app.database().ref("Names");
          ref.push(name.value);
          
            let reff =app.database().ref('Names');
            reff.on('value',snapshot =>{
              const state= snapshot.val();
              Setname(state);})
              
            
            
         
        
      } catch (error) {
        alert("Hata. Lütfen tekrar deneyiniz!");
      }
    },
  
  );

  const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }





  return (
    <div>
    <div className="container card ">
      
    <form onSubmit={handleLogin}>
      <div className="form-group">
      <label><b>
        Eklemek İstediğiniz Ad-Soyadı Yazınız:</b>
        <input name="name" className="form-control" type="text" placeholder="Emre Kaan Durmuş" />
      </label>
      </div>
      <button type="submit">Kaydet</button>
    </form>
  </div>
  <hr></hr>
  <div className="w3-container">
                
                <ul className="w3-ul w3-card-4">
                  <li className="w3-display-container">Emre Kaan Durmuş <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right">Sil</span></li>
                  <li className="w3-display-container">Kaan Emre Durmuş <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right">Sil</span></li>
                  <li className="w3-display-container">Durmuş Kaan Emre <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right">Sil</span></li>
                  
                
                  </ul>
              </div>

    </div>
  );
};



export default Home;
