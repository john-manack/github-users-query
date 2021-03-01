import UserCard from './UserCard';

const UserCardList = (props) => {
    const { users } = props;
    return (
        <>
            {users.map(user => {
                return <UserCard user_info={user} key={user.id}/>
            })}
        </>
    )
}

export default UserCardList;