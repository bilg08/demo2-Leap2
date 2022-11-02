import { PostModal, UserSideBar, ReceivedPosts } from "../components/index";
import data from '../data/advertisings.json'
import { useCollectionContext } from "../context/isActive";
const UserProfile = () => {
	const { cActive } = useCollectionContext();
	
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<UserSideBar />
			<ReceivedPosts/>
			{cActive? <PostModal/> : ""}
		</div>
	);
};
export default UserProfile;
