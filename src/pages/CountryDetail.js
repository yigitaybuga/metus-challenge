import {useEffect, useState} from "react";
import CountryInfo from "../components/CountryInfo";
import BorderCountries from "../components/BorderCountries";
import Link from "next/link";
import Loading from "../components/Loading";


const CountryDetail = ({country}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    const [countryName, setCountryName] = useState(country);

    useEffect(() => {
        getCountry(`https://restcountries.com/v2/name/${countryName}`);
    }, [countryName])

    const getCountry = async (endpoint) => {
        setIsLoaded(false);
        try {
            const res = await fetch(endpoint);
            const data = await res.json();
            setItem(data[0]);
            console.log(data[0]);
            setIsLoaded(true);
            // console.log(data);
        } catch (error) {
            setIsLoaded(false);
            setError(error);
        }
    }

    const linkHandler = () => {
        setCountryName(countryName);
    };

    if (error) {
        return (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                 role="alert">
                <span className="font-medium">Error:</span> {error.message}
            </div>
        );
    } else if (!isLoaded) {
        return (<Loading/>);
    } else {
        if (!item) {
            return (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                     role="alert">
                    <span className="font-medium">Error:</span> Ops
                </div>
            )
        } else {
            return (
                <div className="mt-10">
                    <div className="max-w-[100px] my-20">
                        <Link to="/" href="/" className="self-start">
                            <div
                                className="hover:bg-gray-50 dark:hover:brightness-125 transition-all shadow-md bg-white dark:bg-metus-100 flex items-center px-1 py-2 rounded-md">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     strokeLinejoin="round" className="feather feather-arrow-left">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                <span className="ml-2.5">Back</span>

                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-between items-start flex-col md:flex-row">
                        <div className="w-full md:w-1/2 pr-10">
                            <img className="rounded-t-md w-full h-auto" src={item.flag} alt="{item.name}"/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <section className="pl-5 text-base sm:min-w-[400px] ">
                                <h2 className="py-8 text-3xl font-bold">{item.name}</h2>
                                <CountryInfo data={item}/>
                                <BorderCountries borders={item.borders} linkHandler={linkHandler}/>
                            </section>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default CountryDetail;
