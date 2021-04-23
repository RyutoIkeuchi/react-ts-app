import { Button } from '@chakra-ui/button';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
} from '@chakra-ui/modal';
import { memo, VFC } from 'react';

type Props = {
	onClose: () => void;
	isOpen: boolean;
	onCLickHome: () => void;
	onCLickUserManagement: () => void;
	onCLickSetting: () => void;
};
export const MenuDrawer: VFC<Props> = memo((props) => {
	const {
		onClose,
		isOpen,
		onCLickHome,
		onCLickUserManagement,
		onCLickSetting,
	} = props;
	return (
		<Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerBody p={0} bg="gray.100">
						<Button w="100%" onClick={onCLickHome}>
							TOP
						</Button>
						<Button w="100%" onClick={onCLickUserManagement}>
							ユーザー一覧
						</Button>
						<Button w="100%" onClick={onCLickSetting}>
							設定
						</Button>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
});
