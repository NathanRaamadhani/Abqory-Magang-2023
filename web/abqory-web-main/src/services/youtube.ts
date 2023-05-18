import { AbqoryTvVideo } from "@/types/youtube"
import axios from "axios"

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const ABQORY_YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_ABQORY_YOUTUBE_CHANNEL_ID

const youtubeClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: YOUTUBE_API_KEY,
    maxResults: 100,
  },
})

export const fetchAbqoryTvVideos = async (): Promise<AbqoryTvVideo[]> => {
  const { data } = await youtubeClient.get("/search", {
    params: { type: "video", part: "snippet", channelId: ABQORY_YOUTUBE_CHANNEL_ID },
  })
  const items = data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
  }))

  // fetch every video statistics and merge it to items
  const videoIds = items.map((item: any) => item.id)
  const { data: videoStatistics } = await youtubeClient.get("/videos", {
    params: { part: "statistics", id: videoIds.join(",") },
  })
  const videoStatisticsMap = videoStatistics.items.reduce((acc: any, item: any) => {
    acc[item.id] = item.statistics
    return acc
  }, {})

  //fetch video details and merge it to items
  const { data: videoDetails } = await youtubeClient.get("/videos", {
    params: { part: "contentDetails", id: videoIds.join(",") },
  })

  return items.map((item: any) => ({
    ...item,
    ...videoStatisticsMap[item.id],
    ...videoDetails.items.find((video: any) => video.id === item.id),
  }))
}
