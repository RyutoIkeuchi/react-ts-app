import { Button } from '@chakra-ui/button';
import { VFC, memo, ReactNode } from 'react';

type Props = {
	children: ReactNode;
};
export const PrimaryButton: VFC<Props> = memo((props) => {
	const { children } = props;
  return (
		<Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
		 {children}
		</Button>
	);
});
