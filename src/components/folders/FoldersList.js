// 'use server'

import axios from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { Button, Skeleton } from 'antd';
import { FcFolder } from "react-icons/fc";

export default function FoldersList() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['getCategories'],
        queryFn: async () =>
            await axios.get('/api/v1/categories', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
            }),
    })

    if (isLoading) {
        <div className="m-4">
            <Skeleton />
        </div>
    }

    if (error) {
        <div>
            <p>Error{error.message}</p>
        </div>
        console.log("Massive error", error.message);
    }

    const credentialCategories = data?.data?.response;
    
    console.log(credentialCategories);
    

    return (

        <div>
            {credentialCategories?.map(credential => (
                <div className='my-2' key={credential.id}>
                    <Button
                        block={true}
                        type='text'
                        size='large'

                    >
                        <div className='flex items-center space-x-3'>
                            <FcFolder size={20} />
                            <p className='flex items-center capitalize text-sm'>{credential.category}</p>
                        </div>
                    </Button>
                </div>
            ))}
        </div>

    )
}
