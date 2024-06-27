import React from 'react'
import sites from '@/data/sites.json'
import { FcPrivacy } from "react-icons/fc";
import { BsChevronRight } from 'react-icons/bs';

export default function SiteDetailsLists({ handleItemClick }) {

    return (
        <div>
            {
                sites.map((site) => (
                    <div
                        className='hover:bg-gray-100 p-4 border-b active:scale-95 cursor-pointer'
                        key={site.id}
                        onClick={() => handleItemClick(2, site)}
                    >
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-4'>
                                <FcPrivacy size={18} />
                                <div>
                                    <p>{site.title}</p>
                                    <p className='text-sm'>{site.url}</p>
                                </div>
                            </div>

                            <BsChevronRight />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
