import { Badge } from "../ui/badge";

export default function PelinggihItem({
    name,
    imageSrc
}: Pelinggih) {
    return (
        <div className="text-center w-full h-96 relative w-full h-96 overflow-hidden rounded-lg cursor-pointer border-2 hover:border-primary hover:border-primary transition-all duration-300 ease-in-out">
            <img src={imageSrc} alt={name} className="absolute w-full h-full object-cover z-10" />
            <Badge className="absolute bottom-2 right-2 z-20">
                <a className="font-bold text-md">{name}</a></Badge>
        </div>
    )
}