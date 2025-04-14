interface UserInfoProps {
    name: string
    city: string
  }
  
  const UserInfo: React.FC<UserInfoProps> = ({ name, city }) => {
    return (
      <div className="user-info">
        <h2 className="my-profile">My Profile</h2>
        <ul>
          <li>
            <div><strong>Name:</strong> {name}</div>
          </li>
          <li>
            <div><strong>City:</strong> {city}</div>
          </li>
        </ul>
      </div>
    )
  }
  
  export default UserInfo