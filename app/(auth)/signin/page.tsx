import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'

import Signin from '../../components/UI/signin/signin'

export default async function SigninPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')
  return (
    <Signin />
  )
}
