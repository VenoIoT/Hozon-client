import Credentials from '@/components/Credentials'
import { FloatButton } from 'antd'
import { BsPencilSquare } from 'react-icons/bs'

export const metadata = {
    title: 'Hozon - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <main>
                <Credentials
                // title="Securely store and manage passwords for various accounts and services."
                />


                <div className='lg:hidden'>
                    <FloatButton
                        icon={<BsPencilSquare size={20} />}
                        type="default"
                        style={{
                            right: 36,
                        }}
                    />
                </div>
            </main>
        </>
    )
}

export default Dashboard