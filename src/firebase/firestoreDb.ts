import { storage } from '.'

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { v4 as uuid } from 'uuid'

export const uploadVideo = async (
  file: Blob | Uint8Array | ArrayBuffer
): Promise<string> => {
  const storageRef = ref(storage, `videos/${uuid}`)
  await uploadBytes(storageRef, file, { contentType: 'video/*' })
  const url = await getDownloadURL(storageRef)
  return url
}

export const createVideo = async () => { }

export const createUser = async () => { }
