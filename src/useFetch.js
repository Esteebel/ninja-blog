import { useState, useEffect} from 'react';

const useFectch = ((url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       const abortFunct = new AbortController();
      fetch(url, { signal: abortFunct.signal})
      .then(res => {
        if(!res.ok){
          throw new Error("Could not fetch the expected data...");
        }
        return res.json();
      })
      .then(data =>{
        setBlogs(data)
        setIsPending(false);
        setError(null)    
      })
      .catch(err => {
        if (err.name === "AbortError") {
            console.log('abort cleanup');
        }else{
            setIsPending(false);
            setError(err.message)
        }
      })
      return () => abortFunct.abort();
    }, [url])
    return {data, isPending, error}
})

export default useFectch;