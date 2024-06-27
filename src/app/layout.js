import { Roboto_Mono } from 'next/font/google'
import '@/app/global.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ReactQueryProvider from '../../providers/ReactQueryProvider';
import { ConfigProvider } from 'antd';

export const metadata = {
    title: 'Hozon',
}

const redhat = Roboto_Mono({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", ] });

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={`antialiased text-gray-800 ${redhat.className}`} suppressHydrationWarning={true}>
                <ReactQueryProvider>
                    <AntdRegistry>
                        <ConfigProvider
                            theme={{
                                token: {
                                    fontFamily: redhat.style.fontFamily,
                                },
                            }}
                        >
                            {children}
                        </ConfigProvider>
                    </AntdRegistry>
                </ReactQueryProvider>
            </body>
        </html>
    )
}

export default RootLayout
