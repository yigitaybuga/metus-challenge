import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import {SunIcon, MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";

const Header = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const {systemTheme, theme, setTheme} = useTheme();

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div className="flex items-center" role="button" onClick={() => setTheme('light')}>
                    <SunIcon className="w-10 h-10 text-yellow-500 "/>
                    <span className="ml-2">Light Mode</span>
                </div>
            )
        } else {
            return (
                <div className="flex items-center" role="button" onClick={() => setTheme('dark')}>
                    <MoonIcon className="w-10 h-10 text-gray-900 "/>
                    <span className="ml-2">Dark Mode</span>
                </div>
            )
        }
    };

    return (
        <header className="h-15 shadow-sm bg-white dark:bg-metus-100">
            <div className="max-w-[1920px] mx-auto justify-center flex">
                <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
                    <Logo/>

                    {renderThemeChanger()}
                </div>
            </div>
        </header>
    );
};

export default Header;
