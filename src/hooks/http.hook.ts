import { useState, useCallback } from 'react'
type METHOD = "GET" | "POST" | "DELETE" | "PATCH"

interface UseHTTP {
  loading: boolean,
  error: string | null,
  request: Function,
  clearError: Function
}

export const useHttp = (): UseHTTP => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const request = useCallback(async (url: string, method: METHOD = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
      }
      headers["Content-Type"] = "application/json"
      const response = await fetch(url, { method, headers, body })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "error")
      }

      setLoading(false)
      return data.channels.data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])
  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}