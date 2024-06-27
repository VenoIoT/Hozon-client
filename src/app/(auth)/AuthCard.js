import { Card } from "antd";
import hozonLogo from "/public/images/hozonLogo.png";
import Image from "next/image";

const AuthCard = ({ children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 px-4 lg:px-0">

        <div className="w-full sm:max-w-md overflow-hidden">
            <Card>
                <div className="flex flex-col items-center justify-center w-full mb-5">
                    <Image src={hozonLogo} alt="hozon logo" className="h-auto w-auto object-contain"  priority height={100} width={100} />
                    <p className="text-xs mt-2">Secure Organization Credentials in one Place</p>
                </div>
                {children}
            </Card>
        </div>
    </div>
)

export default AuthCard
