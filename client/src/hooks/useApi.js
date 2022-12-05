import { useState } from "react";
import axios from "axios";

export function useApi(initialValue = "638407eb2aac88001c4e0ceb") {
  const [valores, setValores] = useState(null);


  /* https://c8-64-ft-mern-production.up.railway.app/api/login?user=admin&password=admin */
  const url = `https://c8-64-ft-mern-production.up.railway.app/api/`;

  const fetchValores = () => {
    

    axios.get(`${url}get/${initialValue}`).then((resp) => {
      // Se obtiene la data y se carga al estado al key correspondiente
      setValores({
            shablon: [(resp.data.shablon_nuevo + resp.data.shablon_bajada + resp.data.shablon_grabado), (resp.data.shablon_usado + resp.data.shablon_borrado + resp.data.shablon_bajada + resp.data.shablon_grabado)],
            rendimiento: [[resp.data.logo_claro, resp.data.central_claro, resp.data.full_claro], [resp.data.logo_oscuro, resp.data.central_oscuro, resp.data.full_oscuro]],
            colores: [[resp.data.agua_fc, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, 0, resp.data.dyp], [resp.data.agua_fo, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, resp.data.corrosion, resp.data.dyp]]
      });
    }).catch(err => console.log(err));
  };

  const login = (user, pass)=>{
    console.log(`username: ${user} password: ${pass}`);

    axios.get(`${url}login?user=${user}&password=${pass}`).then((resp) => {
     
      console.log(resp)
     
      
    })


  }

  return [valores, fetchValores, login];
}

