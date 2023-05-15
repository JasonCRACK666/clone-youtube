import { FC, useEffect, useState } from 'react'

import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

import { VideoSerialized, VideoDefault } from '../interfaces/Video'
import { UserDb } from '../interfaces/User'

import { Box, Container, Grid } from '@mui/material'

import { CardVideoItem } from '../components/CardVideoItem'
import { CardVideoItemSkeleton } from '../components/CardVideoItem/Skeleton'

interface State {
  videos: VideoSerialized[]
  loading: boolean
}

export const HomePage: FC = () => {
  const [videos, setVideos] = useState<State['videos']>([])
  const [loading, setLoading] = useState<State['loading']>(true)

  const loadingVideos = async () => {
    const videosSnapshot = await getDocs(collection(db, 'videos'))

    const videosResult: VideoSerialized[] = []

    for (const video of videosSnapshot.docs) {
      const { user, ...videoData } = video.data() as VideoDefault

      const videoItem: VideoSerialized = {
        ...videoData,
        id: video.id,
        user: {
          avatar: '',
          id: '',
          email: '',
          username: ''
        },
        createdAt: videoData.createdAt.toDate(),
        updatedAt: videoData.updatedAt.toDate()
      }

      const userData = await getDoc(user)

      videoItem.user = { id: userData.id, ...userData.data() as Omit<UserDb, 'id'> }
      videosResult.push(videoItem)
    }

    setVideos(videosResult)
    setLoading(false)
  }

  useEffect(() => {
    loadingVideos()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth='xl' fixed sx={{ pt: 3 }}>
        {
          loading ? (
            <Grid container spacing={2}>
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
              <CardVideoItemSkeleton />
            </Grid>
          ) : videos.length === 0 ? (
            <div>
              No hay videos
            </div>
          ) : (
            <Grid container spacing={2}>
              {videos.map(video => (
                <CardVideoItem {...video} key={video.id} />
              ))}
            </Grid>
          )
        }
      </Container>
    </Box>
  )
}
