'use client';

import { useParams } from 'next/navigation';

const UpdateUser = () => {
    const { userId } = useParams();
    return <h1>Update, { userId }</h1>;
};

export default UpdateUser;