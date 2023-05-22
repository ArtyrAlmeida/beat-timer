'use client';

import { useParams } from 'next/navigation';

const UpdateWorkout = () => {
    const { workoutId } = useParams();
    return <h1>Update workout, { workoutId }</h1>;
};

export default UpdateWorkout;