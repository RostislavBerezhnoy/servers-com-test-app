import { useState, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'

type Query = {
  page: number
  rowsPerPage: number
  search: string
  date: string
  author: string
}

export type Filters = Record<string, any> & Partial<Query>

export const DEFAULT_FILTERS = {
  defaultPage: 1,
  defaultPerPage: 5,
}

export function useFilter(
  getQuery: (f: Partial<Filters>) => void,
  {
    defaultPerPage = DEFAULT_FILTERS.defaultPerPage,
    defaultPage = DEFAULT_FILTERS.defaultPage,
  } = DEFAULT_FILTERS,
) {
  const [page, setPage] = useState<Query['page']>(defaultPage)
  const [rowsPerPage, setRowsPerPage] = useState<Query['rowsPerPage']>(defaultPerPage)
  const [search, setSearch] = useState<Query['search']>('')
  const [date, setDate] = useState<Query['date']>()
  const [author, setAuthor] = useState<Query['author']>()

  const getSearchDebQuery = useMemo(() => debounce(fils => getQuery(fils), 500), [getQuery])
  const getDebQuery = useMemo(() => debounce(fils => getQuery(fils), 100), [getQuery])

  const filters = useMemo(
    () => ({
      page,
      rowsPerPage,
      search,
      date,
      author,
    }),
    [page, rowsPerPage, search, date, author],
  )

  useEffect(() => {
    if (filters.search) getSearchDebQuery(filters)
    else getDebQuery(filters)
  }, [filters, getSearchDebQuery, getDebQuery])

  useEffect(() => {
    if (page !== DEFAULT_FILTERS.defaultPage) setPage(DEFAULT_FILTERS.defaultPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPage, rowsPerPage, search, author, date])

  return {
    filters,
    setPage,
    setRowsPerPage,
    setSearch,
    setDate,
    setAuthor,
  }
}
