"use client"
import React, { useState } from 'react'
import { Card, Divider } from 'antd'
import CredentialDetails from './CredentialDetails'
import SiteDetailsLists from './SiteDetailsLists'

export default function Credentials({ title }) {
    const [activeComponent, setActiveComponent] = useState(1);
    const [selectedSite, setSelectedSite] = useState(null);

    const handleItemClick = (itemId, site) => {
        setActiveComponent(itemId);
        setSelectedSite(site);
    }

    return (
        <Card
            title={title}
        >
            {activeComponent === 1 && <SiteDetailsLists handleItemClick={handleItemClick} />}
            {activeComponent === 2 && <CredentialDetails handleItemClick={handleItemClick} selectedSite={selectedSite} />}
        </Card>
    )
}
