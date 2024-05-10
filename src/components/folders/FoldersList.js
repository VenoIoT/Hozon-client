import Link from 'next/link'
import React from 'react'
import { BsFolder } from 'react-icons/bs'

export default function FoldersList() {
  return (
      <div className=' flex flex-col space-y-1'>
          <Link href="/dashboard" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Passwords</div>
          </Link>

          <Link href="/apikeys" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>API keys</div>
          </Link>

          <Link href="/encryption" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Encryption Keys</div>
          </Link>

          <Link href="/certificates" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Certificates</div>
          </Link>

          <Link href="/sshkeys" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>SSH Keys</div>
          </Link>

          <Link href="/database" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Database Credentials</div>
          </Link>

          <Link href="/outh" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>OAuth Tokens</div>
          </Link>

          <Link href="/tokens" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Tokens and Secrets</div>
          </Link>

          <Link href="/configuration" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Configuration Files</div>
          </Link>

          <Link href="/digitalcerts" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Digital Certificates</div>
          </Link>

          <Link href="/accesscodes" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>Access Codes</div>
          </Link>

          <Link href="/licensekeys" className='flex items-center space-x-2 hover:bg-gray-100 p-3 rounded-xl'>
              <BsFolder size={18} />
              <div>License Keys</div>
          </Link>
    </div>
  )
}
