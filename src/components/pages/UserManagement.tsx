/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap, WrapItem, Spinner, Center } from '@chakra-ui/react';
import { VFC, memo, useEffect } from 'react';
import { useAllUsers } from '../hooks/useAllUsers';
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: VFC = memo(() => {
	const { getUsers, users, loading } = useAllUsers();
	useEffect(() => getUsers(), []);
	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }}>
					{users.map((user) => (
						<WrapItem key={user.id} mx='auto'>
							<UserCard
								imageUrl="https://source.unsplash.com/random"
								userName={user.username}
								fullName={user.name}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
		</>
	);
});
