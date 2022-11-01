import UserSideBar from "../components/userSideBar/userSideBar";
import { ReceivedPosts } from "../components/post/receivedpost";
const UserProfile = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<UserSideBar />
			<ReceivedPosts />
		</div>
	);
};
export default UserProfile;
