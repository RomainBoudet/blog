import axios from 'axios';
import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react';

// Je crée un hook réutilisable, qui fabrique un state de donnée vide,
// et un state pour savoir si les données sont en train de charger !
// Je vais checher les data, via Axios et je met les données dans le state
// Je déclenche ma fonction quand je le souhaite, au premier render de mon app.
// Pas dans le useEffect direct pour pouvoir m'en reservir quand je le souhaite.

const useAjax = ((url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios({
        method: 'get',
        url,
      });
      // je purify mon DOM, accésoirement, histoire de virer toutes saloperie,
      // provenant d'une API qui pourrait être contaminé.
      const safeData = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const item of response.data) {
        // eslint-disable-next-line max-len
        const mydata = Object.fromEntries(Object.entries(item).map(([key, value]) => [key, DOMPurify.sanitize(value)]));
        safeData.push(mydata);
      }
      setData(safeData);
    }
    catch (error) {
      console.trace(error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // et je renvoie dans mon state, les données qui me sont nécéssaire :
  // mes data provenant de l'API et, est ce que mes données sont chargées avec un boolean ?
  return [data, loading];
});

export default useAjax;
