'use client'

import { useAuth, useUser } from '@clerk/nextjs';
import React, { useState } from 'react'

export const Counter = () => {
	const [count, setCount] = useState(0);

	const { isLoaded, userId, sessionId, getToken } = useAuth(); //if you just need a userId to personilized experience

	// const { isLoaded, isSignedIn, user } = useUser(); //only if you need full  user object

	if (!isLoaded || !userId) {
		return null;
	}


	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

