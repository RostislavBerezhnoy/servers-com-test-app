import { useState, useEffect, useMemo, useCallback } from 'react'
import { useAppSelector, useAppDispatch } from 'store'
import { resetFilters as resetGlobalFilters } from 'store/slices'
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
  defaultPerPage: 10,
}

export function useFilter(
  getQuery: (f: Partial<Filters>) => void,
  {
    defaultPerPage = DEFAULT_FILTERS.defaultPerPage,
    defaultPage = DEFAULT_FILTERS.defaultPage,
  } = DEFAULT_FILTERS,
) {
  const { clear: isNeedResetFilters } = useAppSelector(store => store?.filter)
  const dispatch = useAppDispatch()

  const [page, setPage] = useState<Query['page']>(defaultPage)
  const [rowsPerPage, setRowsPerPage] = useState<Query['rowsPerPage']>(defaultPerPage)
  const [search, setSearch] = useState<Query['search']>('')
  const [date, setDate] = useState<Query['date']>()
  const [author, setAuthor] = useState<Query['author']>()

  const getSearchDebQuery = useMemo(() => debounce(fils => getQuery(fils), 500), [getQuery])
  const getDebQuery = useMemo(() => debounce(fils => getQuery(fils), 200), [getQuery])

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
    if (filters.search.length) {
      getDebQuery(filters)
    } else {
      getSearchDebQuery(filters)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  useEffect(() => {
    if (page !== DEFAULT_FILTERS.defaultPage) setPage(DEFAULT_FILTERS.defaultPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPage, rowsPerPage, search, author, date])

  const resetFilters = useCallback(() => {
    setPage(DEFAULT_FILTERS.defaultPage)
    setRowsPerPage(DEFAULT_FILTERS.defaultPerPage)
    setSearch('')
    setDate(undefined)
    setAuthor(undefined)
  }, [])

  useEffect(() => {
    if (isNeedResetFilters) {
      resetFilters()
      dispatch(resetGlobalFilters(false))
    }
  }, [isNeedResetFilters, resetFilters, dispatch])

  return {
    filters,
    setPage,
    setRowsPerPage,
    setSearch,
    setDate,
    setAuthor,
    resetFilters,
  }
}
