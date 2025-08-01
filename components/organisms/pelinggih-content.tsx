'use client'

import PelinggihList from "../molecules/pelinggih-list";

type Props = {
    listPelinggih: Pelinggih[]
}

export default function PelinggihContent({
    listPelinggih
}: Props) {
    return (
        <div className="min-h-screen w-full text-center items-center">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Pelinggih
                </h1>
                <PelinggihList listPelinggih={listPelinggih}></PelinggihList>
            </div>
        </div>
    )
}