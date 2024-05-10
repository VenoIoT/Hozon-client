import AntModal from "@/components/dashboard/AntModal";
import { useAuth } from "@/hooks/auth";
import { Avatar, Button, Tag } from "antd";
import { useState } from "react";
import { BsBoxArrowInRight, BsGear, BsInfoCircle, BsPerson } from "react-icons/bs";


const Navigation = ({ user }) => {
    const { logout } = useAuth();
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <>
            <AntModal
                title="Logout"
                open={isModalOpen}
                onCancel={closeModal}
                footer={[
                    <Button size='middle' type='primary' key="submit" onClick={logout}>Yes</Button>
                ]}
            >
                <div className="">
                    <p>Are you sure you want to sign out?</p>
                </div>
            </AntModal>

            <nav className="bg-white flex items-center w-full px-6 py-4 sticky top-0 justify-between z-50">
                <div className="">
                    <div className="flex items-center space-x-3">
                        <Avatar
                            shape="circle"
                            size="default"
                            className="cursor-pointer"
                            // style={{ backgroundColor: "#c2e7fe" }}
                            icon={<BsPerson size={20} />}
                        />
                        <div>
                            <p className='text-normal font-semibold text-gray-600 hidden md:block'>{user?.name}</p>
                            <p className='text-xs font-light text-gray-600 hidden md:block'>{user?.email}</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
                        <div className="flex items-center space-x-3">
                            <Avatar
                                shape="circle"
                                size="default"
                                className="cursor-pointer"
                                style={{ backgroundColor: "#c2e7fe" }}
                                icon={<BsInfoCircle size={20} />}
                            />
                            <Avatar
                                shape="circle"
                                size="default"
                                className="cursor-pointer"
                                style={{ backgroundColor: "#c2e7fe" }}
                                icon={<BsGear size={20} />}
                            />
                        </div>

                        <div>
                            <Avatar
                                shape="square"
                                size="default"
                                className="cursor-pointer"
                                onClick={openModal}
                                icon={<BsBoxArrowInRight size={20} />}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation