import React from 'react'
import { Input } from 'antd';
export default function SearchBar() {
    return (
        <div className='mt-2'>
            <Input placeholder="Search" size='small' style={{ borderRadius: 10, padding: 4 }} />
        </div>
    )
}
