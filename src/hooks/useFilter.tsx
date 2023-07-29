import { useState, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'

type Query = {
  page: number
  rowsPerPage: number
  search: string
  filterName: string
  filterValue: string
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
  const [filterName, setFilterName] = useState<Query['filterName']>('')
  const [filterValue, setFilterValue] = useState<Query['filterValue']>('')

  const filters = useMemo(
    () => ({
      page,
      rowsPerPage,
      search,
      filterName,
      filterValue,
    }),
    [page, rowsPerPage, search, filterName, filterValue],
  )

  const getDebQuery = useMemo(() => debounce(fils => getQuery(fils), 500), [getQuery])

  useEffect(() => {
    if (filters.search) getDebQuery(filters)
    else getQuery(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  useEffect(() => {
    if (page !== DEFAULT_FILTERS.defaultPage) setPage(DEFAULT_FILTERS.defaultPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPage, rowsPerPage, search, filterValue])

  return {
    filters,
    setPage,
    setRowsPerPage,
    setSearch,
    setFilterName,
    setFilterValue,
  }
}
