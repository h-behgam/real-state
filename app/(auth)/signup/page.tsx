import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

import Signup from '../../components/UI/signup/signup'

export default async function SighUpPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')

  return (
    <Signup />
  )
}
