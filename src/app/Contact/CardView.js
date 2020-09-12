import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardView = ({ data }) => {
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
        <div className='cardView'>
            {dataSource.map((item) => {
                return (
                    <Card
                        className='cardView__card'
                        cover={
                            <img
                                alt="example"
                                src={item.avatar}
                            />
                        }
                        hoverable={true}
                    >
                        <Meta
                            title={`${item.name} ( ${item.birthday} )`}
                            description={item.email}
                        />
                        <Meta
                            description={item.phone}
                        />
                        <Meta
                            description={item.country}
                        />
                    </Card>
                )
            })}
        </div>
    )
}

export default CardView;