import { FC } from 'react'

import { VideoSerialized } from '../../interfaces/Video'

import { Avatar, Box, Grid, Tooltip, Typography } from '@mui/material'

import {
  Container,
  ThumbnailContainer,
  VideoInfo,
  ThumbnailImg
} from './styleComponents'

import moment from 'moment'

export const CardVideoItem: FC<VideoSerialized> = ({
  title,
  thumbnail,
  user,
  createdAt
}) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Container>
        <ThumbnailContainer>
          <ThumbnailImg
            src={thumbnail}
            alt='thumbnail'
          />
        </ThumbnailContainer>

        <VideoInfo>
          <Avatar
            src={user.avatar || undefined}
            sx={{ width: 37, height: 37 }}
          />
          <Box>
            <Typography
              variant='subtitle1'
              component='h6'
              fontWeight='bold'
              title='Nuevo video'
            >
              {title}
            </Typography>
            <Tooltip
              title={
                <Typography
                  fontSize='.8rem'
                  py='5px'
                >
                  {user.username}
                </Typography>
              }
              placement='top'
            >
              <Typography
                variant='body2'
                color='gray'
                sx={{
                  display: 'inline-block',
                  '&:hover': {
                    color: 'white'
                  }
                }}
              >
                {user.username}
              </Typography>
            </Tooltip>
            <Typography
              variant='body2'
              color='gray'
            >
              {moment(createdAt).startOf('seconds').fromNow()}
            </Typography>
          </Box>
        </VideoInfo>
      </Container>
    </Grid>
  )
}
