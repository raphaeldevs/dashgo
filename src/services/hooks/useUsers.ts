import { useQuery } from 'react-query'

import { api } from '../../services/api'

type User = {
  name: string
  email: string
  createdAt: string
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users')

  const users: User[] = data.users.map((user: User) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
  })
}
