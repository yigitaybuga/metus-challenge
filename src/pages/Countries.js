import {useEffect, useState} from "react";
import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";


const Countries = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');
    const [filtredItems, setFiltredItems] = useState([]);
    const [openDropDown, setOpenDropDown] = useState(false);

    const dropDownToggle = () => {
        setOpenDropDown(!openDropDown);
    }

    const changeRegion = (region) => {
        setRegion(region);
        setOpenDropDown(false);
    }

    useEffect(() => {
        getCountries('https://restcountries.com/v2/all');
    }, [])


    useEffect(() => {
        if (search === "" && region === "") {
            setFiltredItems(items)
        } else {
            let filteredItems = [];
            let searchTerm = search?.toLowerCase();
            let regionText = region?.toLowerCase();
            for (let i = 0; i < items.length; i++) {
                let canReturn = false;
                let canReturnTitle = false;
                let canReturnRegion = false;
                if (items[i].name.toLowerCase().includes(searchTerm) ||
                    items[i].nativeName.toLowerCase().includes(searchTerm)) {
                    canReturnTitle = true;
                }
                if (items[i].region.toLowerCase().includes(regionText)) {
                    canReturnRegion = true;
                }

                if (canReturnRegion && canReturnTitle) {
                    filteredItems.push(items[i]);
                }

            }
            setFiltredItems(filteredItems);
        }


    }, [search, region])


    const getCountries = async (endpoint) => {
        setIsLoaded(false);
        try {
            const res = await fetch(endpoint);
            const data = await res.json();
            setItems(data);
            setFiltredItems(data);
            setIsLoaded(true);

            // console.log(data);
        } catch (error) {
            setIsLoaded(false);
            setError(error);
        }
    }

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
        return (
            <div>
                <div className="w-full justify-between items-center mt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-full md:w-1/4">
                            <label
                                htmlFor="search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                                Search for a country...
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-900 dark:text-white"
                                         fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="search"
                                    className="dark:placeholder-white::placeholder block p-4 pl-10 w-full text-sm text-gray-900 dark:bg-metus-100 bg-white dark:border-0 border border-gray-200 dark:focus:ring-metus-200 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for a country..."
                                    aria-label="Search for a country..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}

                                />


                            </div>
                        </div>
                        <div className="w-full md:w-1/4 mt-5 md:mt-0 flex justify-end">
                            <div
                                className="bg-white mb-3 lg:mb-0  dark:bg-metus-100 h-12 w-48 text-gray-900 dark:text-white rounded-md shadow-lg relative">

                                <button
                                    className="bg-white dark:bg-metus-100 capitalize h-full ml-auto w-full rounded-md flex items-center justify-between px-6 relative z-20 hover:bg-gray-200 dark:hover:brightness-125 transition-all"
                                    aria-expanded="false"
                                    onClick={dropDownToggle}
                                    role="listbox"
                                    aria-label="Choose region filter"
                                >
                                    {region != '' ? region : 'Filter by region'}
                                    <svg aria-hidden="true" className="scale-75" xmlns="http://www.w3.org/2000/svg"
                                         width="18" height="12">
                                        <path fill="none" stroke="#ccc" stroke-width="2" d="M1 1l8 8 8-8"/>
                                    </svg>
                                </button>

                                <ul className={"absolute top-14 bg-white dark:bg-metus-100 text-gray-900 dark:text-white w-full rounded-md shadow-lg py-2 z-20 " + (openDropDown ? "block" : "hidden")}>
                                    <li className=" fixed top-0 left-0 w-screen h-screen z-[-1]" aria-hidden="true"
                                        onClick={dropDownToggle}>
                                    </li>
                                    <li className="dark:hover:brightness-200 bg-white dark:bg-metus-100 text-gray-900 dark:text-white filter-button px-2.5 py-2.5"
                                        onClick={(e) => changeRegion("")}>
                                        <button className="flex cursor-pointer w-full text-left"
                                                aria-label="No region filter" role="option">All
                                        </button>
                                    </li>
                                    <li className="dark:hover:brightness-200 bg-white dark:bg-metus-100 text-gray-900 dark:text-white filter-button px-2.5 py-2.5"
                                        onClick={(e) => changeRegion("africa")}>
                                        <button className="flex cursor-pointer w-full text-left"
                                                aria-label="Filter by Africa" role="option">Africa
                                        </button>
                                    </li>
                                    <li className="dark:hover:brightness-200 bg-white dark:bg-metus-100 text-gray-900 dark:text-white filter-button px-2.5 py-2.5"
                                        onClick={(e) => changeRegion("america")}>
                                        <button className="flex cursor-pointer w-full text-left"
                                                aria-label="Filter by Americas" role="option">America
                                        </button>
                                    </li>
                                    <li className="dark:hover:brightness-200 bg-white dark:bg-metus-100 text-gray-900 dark:text-white filter-button px-2.5 py-2.5"
                                        onClick={(e) => changeRegion("asia")}>
                                        <button className="flex cursor-pointer w-full text-left"
                                                aria-label="Filter by Asia" role="option">Asia
                                        </button>
                                    </li>
                                    <li className="dark:hover:brightness-200 bg-white dark:bg-metus-100 text-gray-900 dark:text-white filter-button px-2.5 py-2.5"
                                        onClick={(e) => changeRegion("europe")}>
                                        <button className="flex cursor-pointer w-full text-left"
                                                aria-label="Filter by Europe" role="option">Europe
                                        </button>
                                    </li>
                                    <li className="dark:hover:brightness-200 bg-white dark:bg-metus-100 text-gray-900 dark:text-white filter-button px-2.5 py-2.5"
                                        onClick={(e) => changeRegion("oceania")}>
                                        <button className="flex cursor-pointer w-full text-left"
                                                aria-label="Filter by Oceania" role="option">Oceania
                                        </button>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="grid xlg:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row gap-20  pt-14">
                    {filtredItems.map((item, index) => (
                        <CountryCard
                            key={index}
                            flag={item.flags.png}
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            alpha3Code={item.alpha3Code}
                            alpha2Code={item.alpha2Code}
                        />
                    ))}
                </div>
            </div>
        )
            ;
    }
}

export default Countries;
