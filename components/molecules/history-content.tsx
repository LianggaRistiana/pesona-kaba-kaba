type Props = {
    content: string;
}

export default function HistoryContent(
    {
        content
    }: Props
) {
    return (
        <div className="min-h-screen w-full text-center items-center">
            <div className="text-2xl md:text-4xl font-bold">
                Sejarah
            </div>
            <div className="mt-4 text-justify md:mx-12">
                {content}
            </div>

        </div>
    )
}