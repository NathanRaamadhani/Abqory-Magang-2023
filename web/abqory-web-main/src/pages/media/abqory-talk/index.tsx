import { MainLayout } from "@/components/layout"

export default function AbqoryTalk() {
  return (
    <MainLayout
      showPageHeader
      title="Abqory Talk"
      description=" Podcast yang membahas seputar Hukum, Ekonomi, dan Syariah. dengan bahasa yang sederhana, mudah dipahami"
    >
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/show/6WE4qDypH6PfGrHh7xnaaY?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </MainLayout>
  )
}
