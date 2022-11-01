import  {UserSideBar,ReceivedPosts} from '../components/index'
const UserProfile = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<UserSideBar />
			<ReceivedPosts />
		</div>
	);
};
export default UserProfile;
