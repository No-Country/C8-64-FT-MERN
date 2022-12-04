import { useState } from "react";
import axios from "axios";

export function useApi(initialValue = "638407eb2aac88001c4e0ceb") {
  const [valores, setValores] = useState(null);

  const fetchValores = () => {
    const url = `https://c8-64-ft-mern-production.up.railway.app/api/get/${initialValue}`;

    axios.get(url).then((resp) => {
      // Se obtiene la data y se carga al estado al key correspondiente
      setValores({
            shablon: [(resp.data.shablon_nuevo + resp.data.shablon_bajada + resp.data.shablon_grabado), (resp.data.shablon_usado + resp.data.shablon_borrado + resp.data.shablon_bajada + resp.data.shablon_grabado)],
            rendimiento: [[resp.data.logo_claro, resp.data.central_claro, resp.data.full_claro], [resp.data.logo_oscuro, resp.data.central_oscuro, resp.data.full_oscuro]],
            colores: [[resp.data.agua_fc, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, 0, resp.data.dyp], [resp.data.agua_fo, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, resp.data.corrosion, resp.data.dyp]]
      });
    }).catch(err => console.log(err));
  };

  return [valores, fetchValores];
}

/* agua plastisol */ /*  */
/*  */

/* {: 2.85,
: 8.25,
: 250,
: 190,
: 12,
: 25,
: 11,
: 40,
: 33,
: 14,
: 900,
: 700,
: 8.15,
: 13.35,
shablon_bajada: 7,
shablon_borrado: 5,
shablon_grabado: 5,
shablon_nuevo: 11,
shablon_usado: 5} */