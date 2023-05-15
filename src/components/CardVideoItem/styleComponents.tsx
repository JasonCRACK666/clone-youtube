import { styled } from '@mui/system'

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer'
}))

export const ThumbnailImg = styled('img')(() => ({
  borderRadius: '14px',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}))

export const ThumbnailContainer = styled('div')(() => ({
  width: '100%',
  height: '170px',
  overflow: 'hidden',
  marginBottom: 10
}))

export const VideoInfo = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '37px 1fr',
  gap: 8
}))
