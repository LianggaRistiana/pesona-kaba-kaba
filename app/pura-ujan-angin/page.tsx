'use client'

import BackgroundVideo from "@/components/atoms/background-video";
import YouTubeEmbed from "@/components/molecules/youtube-embed";
import HeroContent from "@/components/organisms/hero-content";
import HistoryContent from "@/components/organisms/history-content";

const history = `
Desa Kaba-Kaba yang dibangun oleh Sira Arya Blog pada tahun 1334, dengan wilayah kekuasaan: batas Selatan adalah Jimbaran, batas Barat adalah Desa Pengeragoan, Utara berbatasan dengan wilayah Selatan Tabanan, dan Timur Sungai Busak. Kerajaan Kaba-Kaba merupakan kerajaan di bawah pimpinan Dalem yang berstana di Klungkung, dengan koordinasi yang sangat solid bersama para Arya yang menempati wilayah kerajaan di seluruh Bali.

Sira Arya Blog digantikan oleh putra beliau yang bernama Sira Arya Anglurah Kaba-Kaba sebagai raja kedua yang memimpin Kerajaan Kaba-Kaba. Beliau sangat besar perhatiannya pada kemakmuran dengan membuka lahan pertanian, menata tanah, dan mengelola perairan. Pada masa pemerintahan raja kedua tersebut, rakyat Kaba-Kaba menjadi makmur, dan beliau mendirikan pura-pura yang berkaitan dengan pertanian.

Sira Arya Anglurah Kaba-Kaba kemudian digantikan oleh putranya yang bernama Sira Arya Anglurah Kaba-Kaba Teges pada abad ke-14, yaitu tahun 1386, sebagai raja ketiga Kerajaan Kaba-Kaba. Beliau memiliki perhatian yang besar terhadap kehidupan beragama, sehingga mendirikan pura-pura yang berkaitan dengan pemujaan terhadap bumi dan pemujaan terhadap para pendiri agama. Pada masa itulah didirikan Pura Ujan Angin, yaitu pura Dang Kayangan yang berisi pelinggih Pesimpangan Merajan Kapal, Pesimpangan Pura Batu Ngaus, Pesimpangan Luhur Kungkung, Pesimpangan Luhur Gunung (Rong Tiga), Padma (Ratu Gede Ujan Angin), Pesimpangan Pura Dalem Sakenan, dan Pesimpangan Pura Dalem Buwit.`

export default function PuraUjanAnginPage() {
    return (
        <div>
            <BackgroundVideo
                src="https://wfousyjmdqqsccieqmyg.supabase.co/storage/v1/object/public/web-storage/video/UA-video.mp4"
                opacity={0.8}
                overlayColor="bg-gradient-to-b from-background via-background/50 to-background/60"
            />
            <HeroContent
                title="Pura Ujan Angin"
                description="Pura Ujan Angin merupakan pura dang kayangan, mempersatukan pesimpangan suci dari segala penjuru dalam naungan angin yang membawa restu semesta."
            />

            <HistoryContent
                content={history}
            />

            <YouTubeEmbed id="EptzgqxOXRA"  className="mt-4 mb-8"/>
        </div>
    )
}