export interface PaginatedResult<T> {
    data: T[];
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
  }
