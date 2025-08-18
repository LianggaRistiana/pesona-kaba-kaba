'use client'

import { ModeToggle } from "../atoms/mode-toggle";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            role="navigation"
            className="fixed top-0 w-full gap-4 z-50 flex items-center justify-between py-4 px-4 lg:px-12 xl:px-24 backdrop-blur-lg">
            <Link
                href="/"
                className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
            >
                Pesona Kaba-Kaba
            </Link>

            {/* Mode Toggle */}
            <ModeToggle />
        </nav>
    );

}



// export default function Navbar() {
//     return (
//         <nav
//             role="navigation"
//             className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
//                  py-4 px-4 lg:px-12 xl:px-24 
//                  backdrop-blur-lg bg-background/70 shadow-sm"
//         >
//             {/* Brand */}
//             <Link
//                 href="/"
//                 className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
//             >
//                 Pesona Kaba-Kaba
//             </Link>

//             {/* Mode Toggle */}
//             <ModeToggle />
//         </nav>
//     );
// }
