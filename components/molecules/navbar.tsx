import { ModeToggle } from "../atoms/mode-toggle";


export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full gap-4 z-50 flex items-center justify-between py-4 px-4 lg:px-12 xl:px-24 backdrop-blur-lg  ">
            <p  className="text-xl font-bold text-primary">
                Pesona Kaba-Kaba
            </p>
            <ModeToggle />
        </nav>
    );

}