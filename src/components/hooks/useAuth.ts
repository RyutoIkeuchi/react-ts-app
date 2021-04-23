import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../../types/api/user';

export const useAuth = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const login = useCallback(
		(id: string) => {
			setLoading(true);
			axios
				.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
				.then((res) => {
					if (res.data) {
						history.push('/home');
					} else {
						alert('yu-za-');
					}
				})
				.catch(() => alert('ユーザーが見つかりません'))
				.finally(() => setLoading(false));
		},
		[history]
	);
	return { login,loading };
};
