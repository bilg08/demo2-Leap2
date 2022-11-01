import UserSideBar from "../components/userSideBar/userSideBar";
import { ReceivedPosts } from "../components/post/receivedpost";
import PostModal from "../components/PostModel/model";
import { useCollectionContext } from "../context/isActive";
const UserProfile = () => {
	const {cActive} = useCollectionContext()
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<UserSideBar />
			<ReceivedPosts />
			{cActive ? <PostModal/> : null}
		</div>
	);
};
export default UserProfile;
