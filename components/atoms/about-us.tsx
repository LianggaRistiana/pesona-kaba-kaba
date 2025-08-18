import { Instagram, Link, Youtube } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="w-full py-8 bg-foreground/10 backdrop-blur-xl px-8 lg:px-16">
            <div className="w-full flex flex-col lg:flex-row gap-4 items-start justify-between ">
                {/* Bagian teks */}
                <div className="text-center lg:text-left">
                    <p className="text-xl font-bold">Pesona Kaba-Kaba</p>
                    <p className="text-sm text-muted-foreground">
                        Jelajahi Peninggalan Sejarah di desa Kaba-Kaba, Kediri, Tabanan, Bali
                    </p>
                </div>

                {/* Bagian link */}
                <div className="flex flex-col gap-4 items-start lg:items-start justify-center lg:justify-end">
                    <div className="flex gap-2 items-center">
                        <Link className="w-4 h-4"></Link>
                        <a href="https://kabakaba.desa.id/" className="text-sm font-medium text-primary ">
                            Kabakaba.desa.id
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Instagram className="w-4 h-4"></Instagram>
                        <a href="https://www.instagram.com/desakabakaba/" className="text-sm font-medium text-primary ">
                            desakabakaba
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Instagram className="w-4 h-4"></Instagram>
                        <a href="https://www.instagram.com/kknkabakaba2025/" className="text-sm font-medium text-primary ">
                            kknkabakaba2025
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Youtube className="w-4 h-4"></Youtube>
                        <a href="https://www.youtube.com/@KKNDesaKabaKaba2025" className="text-sm font-medium text-primary ">
                            KKN UNUD Desa Kaba-Kaba 2025
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full text-center gap-4 flex flex-col items-center mt-16">
                <p className=" text-sm text-muted-foreground font-bold">Dibuat Oleh</p>
                <img src="/logo-kkn.svg" alt="Logo" className="h-8 fill-background hidden dark:block" />
                <img src="/logo-kkn-black.svg" alt="Logo" className="h-8 fill-background dark:hidden" />
            </div>
        </div>
    )
}
