import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = async () => {
  const user = await currentUser()
  console.log(user)
  return (
    <>
      <nav className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='text-lg uppercase font-bold text-white'>
              Clerk App
            </div>
          </Link>
        </div>
        <div className='text-whit flex items-center'>
          {!user && (
            <>
              <Link
                href='/sign-in'
                className='text-gray-300 hover:text-white mr-4'
              >
                Sign In
              </Link>
              <Link
                href='/sign-up'
                className='text-gray-300 hover:text-white mr-4'
              >
                Sign Up
              </Link>
            </>
          )}
          <div className='flex items-center gap-5'>
            {user && (
              <Link href='profile' className='text-gray-300 hover:text-white'>
                Profile
              </Link>
            )}
            <UserButton />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
