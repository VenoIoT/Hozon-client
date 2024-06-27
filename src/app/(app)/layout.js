'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import { BsGear } from 'react-icons/bs'
import SideTopBar from '@/components/SideTopBar'
import FoldersList from '@/components/folders/FoldersList'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className='w-full'>
                {/* <Navigation user={user} /> */}
                <div className='grid grid-cols-12 h-screen'>
                    <div className='lg:flex lg:flex-col justify-between col-span-3 overflow-y-auto bg-white hidden'>
                        <SideTopBar />


                        <div className='p-2'>
                            <FoldersList />
                        </div>

                        <div className='sticky bottom-0 z-50 bg-white'>
                            <div className='p-4 flex items-center space-x-4 border-t'>
                                <BsGear size={20} />
                                <div>Settings</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-full lg:col-span-9 overflow-y-auto'>
                        <Navigation user={user} />
                        <main className='py-4 px-2'>{children}</main>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppLayout
