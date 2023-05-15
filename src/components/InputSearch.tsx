import { FC, useState, useEffect, ChangeEvent } from 'react'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

import {
  useAutocomplete,
  Tooltip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import { styled } from '@mui/system'

import { Search as SearchIcon } from '@mui/icons-material'

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const Input = styled('input')(({ theme }) => ({
  display: 'block',
  outline: 'none',
  width: 500,
  backgroundColor: 'transparent',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  borderColor: 'primary.light',
  borderWidth: '1px',
  borderStyle: 'solid',
  padding: '12px 18px',
  fontSize: '1rem',
  borderRadius: '20px 0 0 20px',
  '&:focus': {
    borderColor: 'white'
  }
}))

const ListSearch = styled(List)(() => ({
  width: 500,
  margin: '10px 0 0 0',
  padding: '10px 0',
  borderRadius: '10px',
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: 'white',
  color: 'black',
  overflow: 'auto',
  maxHeight: 500,
  '& li.Mui-focused': {
    backgroundColor: '#CBCBCB',
    cursor: 'default'
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white'
  }
}))

export const InputSearch: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchesList, setSearchesList] = useState<Array<{ label: string }>>([])

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions
  } = useAutocomplete({
    id: 'search-videos',
    options: searchesList,
    getOptionLabel: option => option.label
  })

  const loadingSearchesList = async () => {
    const queryForUsers = query(collection(db, 'users'), where('username', '==', searchQuery))
    const queryForVideos = query(collection(db, 'videos'), where('title', '==', searchQuery))

    const searchedUsers = await getDocs(queryForUsers)
    const searchedVideos = await getDocs(queryForVideos)

    const searchData: Array<{ label: string }> = []

    searchedUsers.forEach(doc => {
      searchData.push({ label: doc.data().username })
    })

    searchedVideos.forEach(doc => {
      searchData.push({ label: doc.data().title })
    })

    setSearchesList(searchData)
  }

  useEffect(() => {
    loadingSearchesList()
  }, [searchQuery])

  const handleChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <Container>
      <div>
        <div {...getRootProps()}>
          <Input
            {...getInputProps()}
            placeholder='Search'
            onChange={handleChangeInputSearch}
            value={searchQuery}
          />
        </div>
        {groupedOptions.length > 0 ? (
          <ListSearch {...getListboxProps()}>
            {searchesList.map((option, index) => (
              <ListItem key={index} {...getOptionProps({ option, index })}>
                <ListItemIcon>
                  <SearchIcon color={'primary'} />
                </ListItemIcon>
                <ListItemText primary={option.label} />
              </ListItem>
            ))}
          </ListSearch>
        ) : null}
      </div>

      <Tooltip title={'Search'}>
        <Button
          variant='contained'
          sx={{
            borderRadius: '0 10px 10px 0',
            py: 1.2
          }}
        >
          <SearchIcon />
        </Button>
      </Tooltip>
    </Container>
  )
}
