import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const user = JSON.parse(localStorage.getItem('user-threads'))
    return (
        <div>
            <Link to={user.username}>
                <Flex w={'full'} justifyContent={'center'}>
                    <Button mx={'auto'}>Visit Profile Page</Button>
                </Flex>
            </Link>
        </div>
    )
}

export default HomePage
