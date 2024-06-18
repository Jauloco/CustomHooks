import { useEffect, useState } from "react"

const localChace = {}

export const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: null,
        isLoading: null,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFech();
    },[url]);

    const setLoadingState = () => { setState({ ...setState, isLoading: true })}

    const getFech = async() =>{

        if (localChace[url]) {
            console.log('Usando local cache');

            setState({
                data: localChace[url],
                isLoading: false,
                hasError: false,
                error: null
            });

            return;
        }

        setLoadingState();

        const resp = await fetch(url);

        //await new Promise( resolve => setTimeout(resolve, 3000 ));

        if ( !resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }

        const data = await resp.json();
        
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });
        localChace[url] = data
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}

