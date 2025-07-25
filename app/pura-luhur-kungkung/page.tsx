import BackgroundVideo from "@/components/atoms/background-video";



export default function PuraLuhurKungKungPage() {
    return (
        <BackgroundVideo
            src="video.mp4"
            opacity={0.5}
            overlayColor="bg-gradient-to-b from-background via-background/20 to-background"
        />
    );
}