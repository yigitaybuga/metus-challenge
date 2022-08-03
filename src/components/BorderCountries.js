import React from 'react';


const BorderCountries = (props) => {
    return (
        props.borders && (
            <div className="mt-10 flex flex-col md:flex-row items-start">
                <span className="w-full md:w-1/2 flex mr-4 mb-4 w-full text-base font-bold sm:w-auto mb-2">Border Countries:</span>
                <div className="w-full md:w-1/2 flex flex-wrap gap-3 sm:ml-3 mt-3 sm:mt-0">
                    {props.borders.map((country, index) => (
                        <div key={index} className="inline-block min-w-[100px] shadow-lg rounded-sm bg-lightElements dark:bg-metus-100 text-center text-sm py-1 px-2 hover:bg-gray-200 dark:hover:brightness-125 transition-all">
                            {country}
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default BorderCountries;
