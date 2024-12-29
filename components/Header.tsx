import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
    return (
        <header className="">
            <div className="max-w-5xl mx-auto py-4 px-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-8 h-8"
                        />
                        <span className="text-xl font-bold">Example App</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/#about"
                        className="hover:underline whitespace-nowrap"
                    >
                        About
                    </Link>
                </div>

                <MobileMenu />
            </div>
        </header>
    );
};

export default Header;