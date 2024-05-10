import React, { useState } from 'react'
import { BsGem, BsPencilSquare } from 'react-icons/bs'
import SearchBar from './dashboard/navbar/SearchBar'
import AntModal from './dashboard/AntModal'
import { Button, Input, Select } from 'antd';
import credentials from '@/data/credentials.json'

const { TextArea } = Input;

export default function SideTopBar({ footer }) {
    const [isOpenModal, setOpenModal] = useState(false);

    const openModal = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false)
    }
    return (
        <>
            <AntModal
                title="ADD CREDENTIAL"
                open={isOpenModal}
                onCancel={closeModal}
                footer={[
                    <Button size='large' type='primary' key="submit">Save</Button>
                ]}
            >
                <form
                    action=""
                    className='space-y-3'
                >
                    <div className='space-y-1'>
                        <label htmlFor="title">Credential title</label>
                        <Input
                            placeholder="Twitter password"
                            size='large'
                            id='title'
                            name='title'
                        />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="site">Site associated</label>
                        <Input
                            placeholder="https//twitter/veno_iot"
                            size='large'
                            id='site'
                            name='site'
                        />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="password">Password</label>
                        <Input
                            placeholder="Password"
                            size='large'
                            id='password'
                            name='password'
                        />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="">Select credential type</label>
                        <Select
                            className='w-full'
                            size='large'
                            placeholder="Select credential"
                            options={credentials}
                        />
                    </div>

                    <div className='space-y-1'>
                        <label htmlFor="note">Note</label>
                        <TextArea
                            placeholder="Login credentials for company's twitter account"
                            size='large'
                            id='note'
                            name='note'
                        />
                    </div>
                </form>
            </AntModal>

            <div className='px-4 pt-4 pb-2 sticky top-0 bg-white shadow'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <BsGem size={20} />
                        <p className='text-2xl font-bold text-gray-800'>Hozon</p>
                    </div>

                    <div>
                        <button
                            className='hover:bg-gray-100 p-2 rounded-xl active:scale-95'
                            onClick={openModal}
                        >
                            <BsPencilSquare size={24} color='gray' />
                        </button>
                    </div>
                </div>
                <SearchBar />
            </div>
        </>
    )
}
