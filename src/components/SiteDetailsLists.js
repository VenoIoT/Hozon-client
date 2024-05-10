import React, { useState } from 'react'
import sites from '@/data/sites.json'
import { BsChevronRight, BsGlobeAmericas } from 'react-icons/bs'

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
                                <BsGlobeAmericas size={18} />
                                <div>
                                    <div>{site.title}</div>
                                    <div>{site.url}</div>
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
