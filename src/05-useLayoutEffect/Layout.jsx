import { useCounter, useFetch } from "../hooks";
import { Info } from "../03-examples/Info";
import { Loading } from "../03-examples/Loading";



export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    console.log({ data, isLoading })
    const { name, location: { name: locationName } = {}, image } = !!data && data;

    return (
        <>
            <h1> Rick and Monty - Members </h1>
            <hr />

            {
                isLoading ? <Loading /> : <Info name={name} locationName={locationName} image={image} />
            }
            <div>
                <button disabled={isLoading} onClick={() => increment()} className="btn btn-primary w-100 " >
                    Next Member
                </button>
            </div>




        </>
    )

}