'use client'

import BackgroundVideo from "@/components/atoms/background-video";
import YouTubeEmbed from "@/components/molecules/youtube-embed";
import HeroContent from "@/components/organisms/hero-content";
import HistoryContent from "@/components/organisms/history-content";

const history = `
Desa kaba-Kaba yang dibangun oleh Sira Arya Blog pada Tahun 1334, dengan wilayah kekuasaan batas Selatan adalah Jimbaran, batas Barat adalah Desa Pengeragoan, Utara perbatasan Selatan wilayah Tabanan, dan Timur Sungai Busak. Kerajaan Kaba-Kaba merupakan kerajaan di bawah pimpinan Dalem yang berstana di Kelungkung, dengan koordinasi yang sangat solid dengan para Arya yang menempati wilayah kerajaan di seluruh Bali.

Arya Blog digantikan oleh putra beliau yang bernama Sira Arya Anglurah Kabakaba sebagai raja ke dua yang memimpin kerajaan kaba-Kaba, beliau sangat besar perhatiannya pada kemakmuran dengan membuat lahan pertanian, dengan menata tanah dan mengelola perairan, sehingga dalam pemerintahan raja ke dua tersebut, rakyat Kaba-Kaba menjadi makmur, dan beliau medirikan pura-pura yang berkaitan dengan pertanian

Sira Arya Anglurah Kabakaba, digantikan oleh putra beliau yang bernama) Sira Arya Anglurah Kabakaba Teges pada abad ke XIV yaitu tahun 1386, sebagai raja ke 3 kerajaan Kaba-Kaba. Beliau mempunyai perhatian yang besar terhadap kehidupan beragama, sehingga beliau mendirikan pura-pura yang berkaitan dengan pemujaan terhadap bumi, dan pemujaan terhadap para pemdiri agama. Pada saat itulah didirikan Pura Ujan Angin, yaitu pura Dang Kayangan yang berisi pelinggih Pesimpangan Merajan Kapal, Pesimpangan Pura Batu Ngaus, Pesimpangan Luhur Kungkung, Pesimpangan Luhur Gunung (Rong Tiga), Padma (Ratu Gede Ujan Angin), Pesimpangan Pura Dalem Sakenan, Pesimpangan Pura Dalem Buwit
`

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

            <YouTubeEmbed id="EptzgqxOXRA"  className="mb-8"/>
        </div>
    )
}