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
                <Credentials />

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