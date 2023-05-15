import { DocumentReference, Timestamp } from 'firebase/firestore'

import { UserDb } from './User'

export interface VideoSerialized {
  id: string
  title: string
  description: string
  video: string
  user: UserDb
  thumbnail: string
  createdAt: Date
  updatedAt: Date
}

export interface VideoDefault {
  title: string
  description: string
  video: string
  user: DocumentReference<unknown>
  thumbnail: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
