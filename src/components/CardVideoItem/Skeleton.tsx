import { FC } from 'react'

import { Skeleton, Box, Grid } from '@mui/material'

import {
  Container,
  ThumbnailContainer,
  VideoInfo,
} from './styleComponents'

export const CardVideoItemSkeleton: FC = () => (
  <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
    <Container>
      <ThumbnailContainer>
        <Skeleton variant='rounded' width={'100%'} height={'100%'} />
      </ThumbnailContainer>

      <VideoInfo>
        <Skeleton variant='circular' sx={{ width: 37, height: 37 }} />
        <Box>
          <Skeleton variant='text' sx={{ fontSize: '1.5rem' }} />
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </Box>
      </VideoInfo>
    </Container>
  </Grid>
)
