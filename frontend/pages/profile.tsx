import {PostModal,UserSideBar} from "../components/index"
import { useCollectionContext } from "../context/isActive";
const UserProfile = () => {
	const { cActive } = useCollectionContext();
	
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<UserSideBar />
			{cActive? <PostModal/> : ""}
		</div>
	);
};
export default UserProfile;
