import { Avatar, Button, Card, Divider, Input, message, Select } from 'antd'
import React, { useState } from 'react'
import { BsArrowLeft, BsCopy, BsPencilSquare, BsTrash } from 'react-icons/bs'
import AntModal from './dashboard/AntModal';

const { TextArea } = Input;

export default function CredentialDetails({ handleItemClick, selectedSite }) {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();


    const openModal = () => {
        setOpenEditModal(true);
    }
    const closeModal = () => {
        setOpenEditModal(false);
    }

    const info = () => {
        messageApi.info('Copied to clipboard!');
    };
    const copyPasswordToClipboard = () => {
        navigator.clipboard.writeText(selectedSite.password)
            .then(() => {
                info();
            })
            .catch(err => {
                console.error('Failed to copy password to clipboard:', err);
            });
    };
   
    return (
        <>
            {contextHolder}
            <AntModal
                title="Edit credential"
                open={openEditModal}
                onCancel={closeModal}
            // footer={}
            >
                <form
                    action=""
                    className='space-y-3'
                >
                    <div className='space-y-1'>
                        <label htmlFor="title">Edit title</label>
                        <Input
                            placeholder="Title"
                            size='large'
                            id='title'
                            name='title'
                        />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="site">Edit site</label>
                        <Input
                            placeholder="https//twitter/veno_iot"
                            size='large'
                            id='site'
                            name='site'
                        />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="password">Edit password</label>
                        <Input.Password
                            placeholder=""
                            size='large'
                            id='password'
                            name='password'
                        />
                    </div>


                    <div className='space-y-1'>
                        <label htmlFor="note">Edit note</label>
                        <TextArea
                            placeholder="Login credentials for company's twitter account"
                            size='large'
                            id='note'
                            name='note'
                        />
                    </div>
                </form>
            </AntModal>
            <div>
                <div className='flex items-center space-x-4'>
                    <Avatar
                        shape="circle"
                        size="default"
                        className="cursor-pointer"
                        onClick={() => handleItemClick(1)}
                        icon={<BsArrowLeft size={20} />}
                    />

                    <p className='text-lg font-bold'>{selectedSite.url}</p>
                </div>
                <Divider>Hozon</Divider>
                <Card>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className='space-y-1 text-xs'>
                            <label htmlFor="title">Password title</label>
                            <Input id='title' name='title' size='large' value={selectedSite.title} />
                        </div>

                        <div className='space-y-1 text-xs'>
                            <label htmlFor="url">Site</label>
                            <Input id='url' name='url' size='large' value={selectedSite.url} />
                        </div>

                        <div className='space-y-1 text-xs'>
                            <label htmlFor="password">Credential</label>
                            <div className="flex items-center space-x-2">
                                <Input.Password id='password' name='password' size='large' value={selectedSite.password} />
                                <div
                                    className='border p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer text-gray-400 hover:text-gray-900 active:scale-90'>
                                    <BsCopy size={20} onClick={copyPasswordToClipboard} />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-1 text-xs'>
                            <label htmlFor="password">Note</label>
                            <TextArea id='note' name='note' size='large' value={selectedSite.note} />
                        </div>
                    </div>
                </Card>
                <Divider />
                <div className='flex items-center space-x-6'>
                    <Button size='middle' onClick={openModal}>
                        <div className='flex space-x-2'>
                            <BsPencilSquare size={20} />
                            <div>Edit</div>
                        </div>
                    </Button>

                    <Button size='middle' danger >
                        <div className='flex space-x-2'>
                            <BsTrash size={20} />
                            <div>Delete</div>
                        </div>
                    </Button>
                </div>
            </div>
        </>
    )
}
