'use client'

import BackgroundVideo from "@/components/atoms/background-video";
import CandiBentar from "@/components/atoms/candi-bentar";
import KoriMedal from "@/components/atoms/kori-medal";
import KoriNgeranjing from "@/components/atoms/kori-ngranjing";
import YouTubeBackground from "@/components/atoms/youtube-background";
import YouTubeEmbed from "@/components/molecules/youtube-embed";
import HeroContent from "@/components/organisms/hero-content";
import HistoryContent from "@/components/organisms/history-content";
import MapTempleContent from "@/components/organisms/map-temple-content";
import PelinggihContent from "@/components/organisms/pelinggih-content";

const mapItems: MapItem[] = [
  { id: 1, x: 68, y: 78, w: 9, h: 13, desc: "Ratu Mas Manik Galih", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK01.JPG" },
  { id: 2, x: 84, y: 54, w: 8, h: 14, desc: "Ratu Gede Jaksa", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK02.JPG" },
  { id: 3, x: 86, y: 30, w: 12, h: 12, desc: "Ratu Dwayu", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK03.JPG" },
  { id: 4, x: 82, y: 80, w: 4, h: 15, desc: "Ratu Made", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK04.JPG" },
  { id: 5, x: 89, y: 18, w: 5, h: 8, desc: "Rambut Sedana", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK05.JPG" },
  { id: 6, x: 76, y: 39, w: 3, h: 5, desc: "Dewa Gusti Nyoman Lingsir", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK06.JPG" },
  { id: 7, x: 75, y: 80, w: 3, h: 5, desc: "Pelinggih Pariwara", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK07.JPG" },
  { id: 8, x: 60.5, y: 81, w: 3, h: 6, desc: "Pelinggih Pariwara", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK08.JPG" },
  { id: 9, x: 71, y: 68, w: 3, h: 5, desc: "Catu Mujung", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK09.JPG" },
  { id: 10, x: 65, y: 68, w: 3, h: 5, desc: "Catu Meres", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK10.JPG" },
  { id: 11, x: 86, y: 42, w: 3, h: 5, desc: "Taksu", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK11.JPG" },
  { id: 12, x: 72, y: 53, w: 3, h: 5, desc: "Pedudusan nerang", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK12.JPG" },
  { id: 13, x: 52, y: 88, w: 3, h: 5, desc: "Ratu Gede Sakti", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK13.JPG" },
  { id: 14, x: 56, y: 70, w: 4, h: 12, desc: "Pengaruman", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK14.JPG" },
  { id: 15, x: 70, y: 18, w: 12, h: 25, desc: "Pesamyangan", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK15.JPG" },
  { id: 16, x: 56, y: 9, w: 9, h: 15, desc: "Bale Kidung", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK16.JPG" },
  { id: 17, x: 77, y: 74, w: 3, h: 5, desc: "Ratu Nyoman Tukang", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK17.JPG" },
  { id: 18, x: 44, y: 59, w: 6, h: 6, desc: "Pesimpangan Batu Ngaus", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK18.JPG" },
  { id: 19, x: 16, y: 40, w: 8, h: 12, desc: "Pengubengan", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK19.JPG" },
  { id: 20, x: 5, y: 85, w: 10, h: 14, desc: "Gendongan", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK20.JPG" },
  { id: 21, x: 18, y: 80, w: 12, h: 18, desc: "Bale Onen", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK21.JPG" },
  { id: 22, x: 33, y: 79, w: 16, h: 20, desc: "Pemayasan", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK22.JPG" },
  { id: 23, x: 20, y: 14, w: 38, h: 24, desc: "Pesanekan", imgSrc: "https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/LK23.JPG" },
]


const history = `
Sebagaimana dikemukakan pada uraian situs kuno berupa pura, Pura Luhur Kungkung didirikan pada abad ke-15 oleh raja keempat yang bernama Anak Agung Ngurah Made Putra Teges (1412–1500). Pura Luhur Kungkung didirikan sebagai tempat pemujaan Tuhan dalam kekuatan Stiti, melalui prebawa-Nya sebagai Ratu Mas Manik Galih. Pura ini berkaitan dengan kemakmuran masyarakat, khususnya di bidang pangan. Selain itu, juga didirikan pelinggih Ratu Gede Jaksa sebagai tempat memohon ketertiban, baik dalam kehidupan sosial maupun bidang hukum.

Sejak tahun 1600 Masehi, raja ketujuh yang bernama Arya Anglurah Kaba-Kaba Yudha Teges menyerahkan kepercayaan kepada Ki Gusti Gede Bokah beserta Ki Pasek yang bertempat di Dauh Yeh untuk ngamong Pura Luhur Kungkung. Sampai saat ini, pura tersebut masih diamong oleh pretisentanan Ki Gusti Gede Bokah bersama seluruh warga Banjar Dauh Yeh, serta disungsung oleh masyarakat Kaba-Kaba dan para krama subak.

Nama Kungkung sangat berkaitan dengan adanya beji dengan toya kum-kum (air suci yang semerbak) yang berlokasi di Nista Mandala Pura Kungkung. Pada area beji terdapat tiga pancoran. Pancoran Beji 1 berfungsi sebagai beji Dewa Yadnya, Pancoran Beji 2 digunakan untuk beji Pitra Yadnya, sedangkan Pancoran Beji 3 berfungsi sebagai pancoran untuk pemandian umum.

Sampai saat ini, Beji Kungkung masih tetap disucikan oleh masyarakat Kaba-Kaba dan berfungsi sesuai dengan uraian di atas, baik sebagai beji Dewa Yadnya, Pitra Yadnya, pemandian umum, maupun pemandian untuk Banyu Pinaruh.`

export default function PuraLuhurKungKungPage() {
  return (
    <div>
      <BackgroundVideo
        src="https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/video/LK-video.mp4"
        opacity={0.8}
        overlayColor="bg-gradient-to-b from-background via-background/50 to-background/60"
      />
      {/* <YouTubeBackground videoId="01dn67QubYQ"></YouTubeBackground> */}
      <HeroContent
        title="Pura Luhur Kungkung"
        description="Warisan suci abad XV, Pura Luhur Kungkung menjadi pusat pemujaan dan kemakmuran rakyat Kaba-Kaba.
Beji Kungkung tetap lestari, memancarkan toya kum-kum yang disucikan hingga kini."
      />
      <HistoryContent
        content={history}
      />

      <MapTempleContent mapItems={mapItems}>
        <KoriNgeranjing />
        <KoriMedal />
        <CandiBentar />
      </MapTempleContent>

      <PelinggihContent listPelinggih={mapItems} />

      <YouTubeEmbed id="5bKNcr9ylDw"  className="mt-4 mb-8"/>
    </div>
  );
}