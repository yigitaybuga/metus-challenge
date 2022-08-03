import React from 'react';

const CountryInfo = (props) => {
    const currencies = props.data.currencies.map((currency) => currency.name);
    const languages = props.data.languages.map((language) => language.name);


    return (
        <div className="flex flex-row flex-wrap justify-between">
            <ul className="w-1/2 sm:pr-16">
                <li className="pb-2">
                    <span className="font-bold">Native Name: </span> {props.data.name}
                </li>
                <li className="pb-2">
                    <span className="font-bold">Population: </span> {props.data.population.toLocaleString('tr')}
                </li>
                <li className="pb-2">
                    <span className="font-bold">Region: </span> {props.data.region}
                </li>
                <li className="pb-2">
                    <span className="font-bold">Sub Region: </span> {props.data.subregion}
                </li>
                <li className="pb-2">
                    <span className="font-bold">Capital: </span> {props.data.capital}
                </li>
            </ul>
            <ul className="w-1/2 sm:pr-16">
                <li className="pb-2">
                    <span className="font-bold">Top Level Domain: </span> {props.data.tld}
                </li>
                <li className="pb-2">
                    <span className="font-bold">Currencies: </span> {currencies.toString()}
                </li>
                <li className="pb-2">
                    <span className="font-bold">Languages: </span> {languages.toString()}
                </li>
            </ul>
        </div>
    );
};

export default CountryInfo;
