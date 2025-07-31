import BackgroundVideo from "@/components/atoms/background-video";
import HeroContent from "@/components/organisms/hero-content";
import HistoryContent from "@/components/organisms/history-content";
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

const history = `
Sebagaimana dikemukakan pada uraian situs kuno berupa pura, bahwa pura Luhur Kungkung yang didirikan pada abad ke XV oleh raja ke IV yang bernama Anak Agung Ngurah Made Putra Teges (1412-1500). Pura Luhur Kungkungdidirikan sebagai tempat memuja Tuhan dalam kekuatan Stiti, melalui prebawaNya sebagai Ratu Mas Manik Galih, merupakan pura yang berkaitan dengan kemakmuran masyarakat khususnya dibidang pangan. Juga didirikan pelinggih Ratu Gede Jaksa sebagai tempat memohon ketertiban baik dibidang pri kehidupan sosial maupun dibidang hukum.

Semenjak Tahun Masehi 1600 Raja ke VII yang bernama Arya Anglurah Kaba Kaba Yudha Teges, menyerahkan kepercayaan kepada Ki Gusti Gede
Bokah beserta ki Pasek yang bertempat di Dauh Yeh untuk ngamong Pura Luhur Kungkung. Sampai sat ini diamong oleh pretisentanan Ki Gusti Gede Bokah bersama semua warga banjar Dauh Yeh, dan disungsung oleh masyarakat Kaba-Kaba dan kerama subak.

Nama Kungkung sangat berkaitan dengan adanya beji dengan toya kum-kum (air suci yang semerbak) yang berlokasi di Nista Mandala Pura Kungkung. Pada area beji terdapat 3 lokasi pancoran, yaitu Pancoran Beji (No 1) adalah berfungsi sebagai beji Dewa Yadnya, Pancoran Beji (No.2) adalah berfungsi sebagai beji Dewa Pitara Yadnya, dan pancoran No 3 adalah pancoran untuk pemandian umum.

Sampai saat ini beji Kung-kung masih tetap disucikan oleh masyarakat Kaba-Kaba dan masih berfungsi sebagai uraian diatas sesuai lokasi pancoran, baik untuk beji Dewa Yadnya, Dewa Pitara, dan pemandian umum juga berfungsi sebagai pemandian untuk Banyu Pinaruh.
`

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
                content={history}
            />
            <PelinggihContent listPelinggih={Pelinggih} />
        </div>
    );
}