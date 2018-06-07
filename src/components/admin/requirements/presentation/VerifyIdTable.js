import React from 'react'
import { Table } from 'antd'
export default ({record}) => {
  const columns = [
    { title: 'Client', dataIndex: 'profile.firstName', key: 'client' },
    { title: 'Birthdate', dataIndex: 'profile.birthDate', key: 'birthdate' },
    { title: 'Phone Number', dataIndex: 'profile.phone', key: 'phone' }
  ];
  return(
    <Table
      rowKey="id"
      columns={columns}
      dataSource={record}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.payload}</p>}
    />
  )
}
