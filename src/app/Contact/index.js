import React, { useState, useEffect } from 'react';
import { Button, Spin, Input, Menu, Dropdown, Select } from 'antd';
import { ReloadOutlined, AppstoreOutlined, UnorderedListOutlined, DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'shared/layout/container';
import withMeta from 'shared/hoc/withMeta';
import withPage from 'shared/hoc/withPage';
import Heading from 'shared/heading';
import ContactTable from './ContactTable';
import CardView from './CardView';

// redux
import actions from 'store/actions';
import selectors from 'store/selectors';

const { Search } = Input;
const { Option } = Select;

const genderMenu = (
    <Menu>
        <Menu.Item>Male</Menu.Item>
        <Menu.Item>Female</Menu.Item>
        <Menu.Item>Undecleared</Menu.Item>
    </Menu>
)

const Contact = () => {
    const [isActive, setisActive] = useState(Number(localStorage.getItem('sortType')) || 1);

    const sortItems = (index) => {
        setisActive(Number(index));
        localStorage.setItem('sortType', Number(index));
    }

    const dispatch = useDispatch();
    const findContacts = () => dispatch(actions.contacts.find({ params: { results: Math.floor(Math.random() * 1000) } }));

    const { data, loaded } = useSelector(selectors.contacts);

    useEffect(() => {
        findContacts();
    }, [])

    return (
        <div className='contact'>
            <Container>
                <div className='contact__header'>
                    <Heading text='Contacts' />
                    <div className='contact__actions'>
                        <Button type="primary" shape="circle" onClick={() => findContacts()}>
                            <ReloadOutlined />
                        </Button>
                        <div className='contact__actions__sort'>
                            <Button type={isActive === 1 ? 'primary' : ''} onClick={() => sortItems(1)}>
                                <AppstoreOutlined />
                            </Button>
                            <Button type={isActive === 2 ? 'primary' : ''} onClick={() => sortItems(2)}>
                                <UnorderedListOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='contact__filters'>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Dropdown overlay={genderMenu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                           Choose gender <DownOutlined />
                        </a>
                    </Dropdown>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
                {
                    data && isActive === 1
                        ? <CardView data={data} />
                        : !loaded && isActive === 1
                            ? <div className='perfectCenter'><Spin /></div>
                            : null
                }
                {
                    data && isActive === 2
                        ? <ContactTable data={data} />
                        : !loaded && isActive === 2
                            ? <div className='perfectCenter'><Spin /></div>
                            : null
                }
            </Container>
        </div>
    )
}

const WrapperContact = withMeta(Contact);

export default withPage({
    Component: WrapperContact
});