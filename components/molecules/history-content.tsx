type Props = {
    content: string;
}

export default function HistoryContent(
    {
        content
    }: Props
) {
    return (
        <div className="min-h-screen w-full flex text-center items-center">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                    Sejarah
                </h1>
                <p className="mt-4 text-justify md:mx-12">
                    {content}
                </p>
            </div>
        </div>
    )
}