import Link from "next/link";

const CountryCard = ({name, flag, population, region, capital, alpha3Code,alpha2Code}) => {
    return (
        <Link as={`/country/${name.toLowerCase()}`}
              href="/country/[country]">
            <div
                className="cursor-pointer bg-white dark:bg-metus-100 rounded-t-md rounded-b-md shadow-sm">
                <div className="overflow-hidden flex-1 relative">

                    <div className="w-full h-full inline-block flex items-center justify-center group relative z-10">
                        <img src={`https://flagicons.lipis.dev/flags/4x3/${alpha2Code.toLowerCase()}.svg`}
                             className="transition-transform ease-in-out duration-300 group-hover:scale-110 object-contain max-h-full max-w-full"
                             alt={name + " Flag"}
                             width="100%" height="auto"
                        />
                    </div>
                </div>
                <div className="px-5 py-5">
                    <div className="text-lg mb-5">{name}</div>
                    <div className="text-sm">
                        <span>Population: </span>
                        {population.toLocaleString('tr')}
                    </div>
                    <div className="text-sm">
                        <span>Region: </span>
                        {region}
                    </div>
                    <div className="text-sm">
                        <span>Capital: </span>
                        {capital}
                    </div>
                </div>


            </div>
        </Link>
    )
}

export default CountryCard;
