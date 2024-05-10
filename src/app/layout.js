import '@/app/global.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
    title: 'Hozon',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased text-gray-800">
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    )
}

export default RootLayout
