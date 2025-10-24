import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);   //registro l'errore nello state error


    //prendo i dati dall'API e li inserisco nello state data
    //prima di richiedere i dati, devo avviare il server (json-server --watch data/db.json --port 8000)
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})          //ogni volta che cambia l'URL, viene richiamato useEffect
            .then(res => {
                if(!res.ok){    //se non ritorna i dati, viene lanciato un errore
                    throw Error('non è stato possibile ottenere i dati');   //questo messaggio viene mostrato nel console.log della catch
                }
                 return res.json()
                })
            .then(data => {
                setData(data)
                setIsLoading(false);    //quando ho i dati, non viene più mostrato il messaggio di caricamento
                setError(null);  //l'errore viene resettato nullo
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                setIsLoading(false);  //non viene più mostrato il messaggio di caricamento
                setError(err.message);  //l'errore viene registrato nello state error
            });

            return() => abortCont.abort();
            
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;