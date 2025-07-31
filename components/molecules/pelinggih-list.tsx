import PelinggihItem from "../atoms/pelinggih-items"

type Props = {
    listPelinggih: Pelinggih[]
}


export default function PelinggihList({ listPelinggih }: Props) {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                listPelinggih.map((item, index) => (
                    <PelinggihItem key={index} {...item} />
                ))
            }
        </div>
    )
}