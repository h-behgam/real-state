import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

import Signin from '../../components/UI/signin/signin'

export default async function SigninPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')
  return (
    <Signin />
  )
}
