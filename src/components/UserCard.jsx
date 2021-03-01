import './UserCard.css'

const UserCard = (props) => {
    const { user_info } = props;
    return (
        <>
            <img src={user_info.avatar_url} alt={`${user_info.login}'s avatar`} className="avatar"></img>
            <p>User Name: {user_info.login}</p>
            <p>Bio: {user_info.bio}</p>
        </>
    )
}

export default UserCard;