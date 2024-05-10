import { Card } from "antd"

const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 px-4 lg:px-0">

        <div className="w-full sm:max-w-md overflow-hidden">
            <Card>
                {/* <div>{logo}</div> */}
                <div className="flex flex-col items-center justify-center w-full mb-5">
                    <h2 className="text-3xl font-bold">HOZON</h2>
                    <p className="text-xs">Secure Organization Credentials in one Place</p>
                </div>
                {children}
            </Card>
        </div>
    </div>
)

export default AuthCard
