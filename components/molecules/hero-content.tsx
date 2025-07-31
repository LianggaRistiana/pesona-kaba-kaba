type Props = {
    title: string;
    description: string;
}



export default function HeroContent(
    {
        title,
        description
    }: Props
) {
    return (
        <div className="min-h-screen flex items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <div className="px-6">
                    <p className="text-4xl md:text-8xl font-bold">
                        {title}
                    </p>
                    <p className="mt-4 md:mt-8 text-justify">
                        {description}
                    </p>
                </div>
                <div></div>

            </div>
        </div>

    )
}