'use client';

import { useParams } from 'next/navigation';

const UserInfo = () => {
    const { userId } = useParams();
    return <h1>UserInfo, { userId }</h1>;
};

export default UserInfo;