import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs-react"


 
export function useApi(initialValue = "63963d988eff5cef61ca9be5") { //638407eb2aac88001c4e0ceb
  const [dataBase, setDataBase] = useState(null);
  const [valores, setValores] = useState({
    shablon: [(23), (22)],
    rendimiento: [[900, 250, 40], [700, 190, 33]],
    colores: [[2.85, 8.15, 13.35, 11, 14, 0, 25], [8.25, 8.15, 13.35, 11, 14, 12, 25]],
    static: true
});
  


  /* https://c8-64-ft-mern-production.up.railway.app/api/login?user=admin&password=admin */
  /* const [url, setUrl] = useState(); */
  /* const url = `https://c8-64-ft-mern-production.up.railway.app/api/`; */
  const url = "https://c8-64-ft-mern.onrender.com/api/";

    const fetchValores = () => {      

      axios.get(`${url}content/${initialValue}`).then((resp) => {
        setValores({
              shablon: [(resp.data.shablon_nuevo + resp.data.shablon_bajada + resp.data.shablon_grabado), (resp.data.shablon_usado + resp.data.shablon_borrado + resp.data.shablon_bajada + resp.data.shablon_grabado)],
              rendimiento: [[resp.data.logo_claro, resp.data.central_claro, resp.data.full_claro], [resp.data.logo_oscuro, resp.data.central_oscuro, resp.data.full_oscuro]],
              colores: [[resp.data.agua_fc, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, 0, resp.data.dyp], [resp.data.agua_fo, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, resp.data.corrosion, resp.data.dyp]]
        });
      })
      .catch(err => console.error(err))
      .then(item => {
        

      });

      
    };

  const login = (user, pass, openLoginError)=>{
    

    axios.get(`${url}users`).then((resp) => {
      
      const index = resp.data.findIndex((cuenta => cuenta.user === user ));
      const usuario = (resp.data[index]);
      

      if(index >= 0){

        bcrypt.compare(pass, usuario.password, (err, isMatch)=>{
          if(err){
            throw err
          }else if(!isMatch){
            openLoginError()
          }else{
            window.localStorage.setItem("login", JSON.stringify({user: usuario.user, idbase: usuario.idbase, logged: true}))

            window.location.replace("/configuracion");
          }
        }) 

      } else{
        openLoginError()
      }
     
      
    })
  }





  const leerBD = () => {
    axios.get(`${url}content/${initialValue}`).then((resp) => {
      setDataBase(resp.data);
    }).catch(err => console.log(err));
  };

  const postDB = (newValue)=>{

    

    axios.patch(`${url}/updateBase/${initialValue}`, newValue)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return [valores, fetchValores, login, leerBD, postDB, dataBase, setDataBase];
}

