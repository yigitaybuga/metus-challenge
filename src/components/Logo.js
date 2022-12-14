import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <a className="my-2 flex items-center space-x-1 text-indigo-500">
                <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap text-black dark:text-white">Where in the world?</span>
            </a>
        </Link>
    )
}

export default Logo;
