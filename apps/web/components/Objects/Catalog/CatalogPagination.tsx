'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// Named `...Utils` rather than `catalogPagination` so it cannot collide with
// this file on case-insensitive filesystems — the two names differed only in
// their leading capital, which made macOS resolve this import to the wrong
// module and fail the build.
import {
  CATALOG_PAGE_SIZE,
  CatalogPageNumber,
  getCatalogPageNumbers,
} from './catalogPaginationUtils'

const paginationWrapperClassName = 'flex items-center justify-center gap-1'
const paginationNavButtonClassName =
  'flex items-center gap-1 w-[40px] h-[40px] justify-center text-[14px] font-medium text-[#1B2126] bg-white rounded-[12px] border border-[#ccc] hover:border-[#1B2126] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#ccc] transition-colors'
const paginationPagesClassName = 'flex items-center gap-1'
const paginationEllipsisClassName = 'w-[40px] h-[40px] flex items-center justify-center text-[#8e8e8e] text-[14px]'
const paginationPageButtonBaseClassName =
  'w-[40px] h-[40px] flex items-center justify-center text-[14px] font-medium rounded-[12px] transition-colors'
const paginationActivePageButtonClassName = 'bg-[#1B2126] text-white'
const paginationInactivePageButtonClassName =
  'bg-white text-[#1B2126] border border-[#ccc] hover:border-[#1B2126]'

type CatalogPaginationProps = {
  currentPage: number
  totalPages: number
  pageNumbers: CatalogPageNumber[]
  onPageChange: (_page: number) => void
  previousLabel: string
  nextLabel: string
  className?: string
}

export function useCatalogPagination<T>(
  items: T[],
  pageSize = CATALOG_PAGE_SIZE
) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(items.length / pageSize)
  const visibleCurrentPage = totalPages > 0 ? Math.min(currentPage, totalPages) : 1

  const paginatedItems = useMemo(() => {
    const startIndex = (visibleCurrentPage - 1) * pageSize
    return items.slice(startIndex, startIndex + pageSize)
  }, [items, visibleCurrentPage, pageSize])

  const pageNumbers = useMemo(
    () => getCatalogPageNumbers(visibleCurrentPage, totalPages),
    [visibleCurrentPage, totalPages]
  )

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }, [totalPages])

  const resetPage = useCallback(() => {
    setCurrentPage(1)
  }, [])

  return {
    currentPage: visibleCurrentPage,
    totalPages,
    paginatedItems,
    pageNumbers,
    goToPage,
    resetPage,
  }
}

export default function CatalogPagination({
  currentPage,
  totalPages,
  pageNumbers,
  onPageChange,
  previousLabel,
  nextLabel,
  className,
}: CatalogPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const wrapperClassName = [className, paginationWrapperClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClassName}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={paginationNavButtonClassName}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">{previousLabel}</span>
      </button>

      <div className={paginationPagesClassName}>
        {pageNumbers.map((page, index) => (
          <React.Fragment key={`${page}-${index}`}>
            {page === '...' ? (
              <span className={paginationEllipsisClassName}>...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`${paginationPageButtonBaseClassName} ${
                  currentPage === page
                    ? paginationActivePageButtonClassName
                    : paginationInactivePageButtonClassName
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={paginationNavButtonClassName}
      >
        <span className="hidden sm:inline">{nextLabel}</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
