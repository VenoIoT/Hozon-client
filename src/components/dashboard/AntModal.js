import { Button, Input, Modal, Select } from 'antd'
import React from 'react'


export default function AntModal({ onCancel, open, title, onOk, footer, children }) {
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Modal
            title={title}
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            footer={footer}
        >
            {children}
        </Modal>
    )
}
