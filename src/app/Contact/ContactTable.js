import React from 'react';
import { Table } from 'antd';
import { columns } from './data/columns';
  

const ContactTable = ({ data }) => {
    const dataSource = data && data.rows.map((item) => {
        return {
            avatar: item.picture.large,
            name: `${item.name.title} ${item.name.first} ${item.name.last}`,
            birthday: item.registered.age,
            email: item.email,
            phone: item.phone,
            location: item.location.country,
            nat: item.nat
        }
    })
    return (
        <Table columns={columns} dataSource={dataSource} />
    )
}

export default ContactTable;