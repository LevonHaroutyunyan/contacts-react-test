import React from 'react';
export const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: url => <img src={url} alt='user'/>,
    },
    {
      title: 'Full name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
       title: 'Email',
       dataIndex: 'email',
       key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
      title: 'Nationality',
      key: 'nat',
      dataIndex: 'nat',
    },
  ];