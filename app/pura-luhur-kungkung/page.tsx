import BackgroundVideo from "@/components/atoms/background-video";
import HeroContent from "@/components/molecules/hero-content";
import HistoryContent from "@/components/molecules/history-content";
import PelinggihContent from "@/components/organisms/pelinggih-content";

const Pelinggih: Pelinggih[] = [
  {
    name: "Tugu",
    imageSrc: "https://heroui.com/images/fruit-1.jpeg"
  },
  {
    name: "Tugu",
    imageSrc: "https://heroui.com/images/fruit-1.jpeg"
  },
  {
    name: "Tugu",
    imageSrc: "https://heroui.com/images/fruit-1.jpeg"
  }
];

export default function PuraLuhurKungKungPage() {
    return (
        <div>
            <BackgroundVideo
                src="video.mp4"
                opacity={0.5}
                overlayColor="bg-gradient-to-b from-background via-background/50 to-background/60"
            />
            <HeroContent
                title="Pura Luhur Kung-Kung"
                description="In laborum minim cupidatat deserunt amet consequat reprehenderit qui. Elit voluptate sit laborum Lorem adipisicing duis ea exercitation mollit. Laboris labore deserunt ea dolor occaecat labore aute aliquip mollit. "
            />
            <HistoryContent
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. n laborum minim cupidatat deserunt amet consequat reprehenderit qui. Elit voluptate sit laborum Lorem adipisicing duis ea exercita
                content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. n laborum minim cupidatat deserunt amet consequat reprehenderit qui. Elit voluptate sit laborum Lorem adipisicing duis ea exercita"
            />
            <PelinggihContent listPelinggih={Pelinggih} />
        </div>
    );
}