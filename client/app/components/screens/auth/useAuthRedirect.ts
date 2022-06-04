import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const useAuthRedirect = () => {
  const { user } = useAuth()
  const { push, query } = useRouter()
  const redirect = query.redirect ? String(query.redirect) : '/'

  useEffect(() => {
    if (user) push(redirect)
  }, [user, redirect, push])
}