interface UserInfoProps {
    name: string
    city: string
  }
  
  const UserInfo: React.FC<UserInfoProps> = ({ name, city }) => {
    return (
      <>
        <h2>User Info</h2>
        <ul>
          <li>
            <div><strong>Name:</strong> {name}</div>
          </li>
          <li>
            <div><strong>City:</strong> {city}</div>
          </li>
        </ul>
      </>
    )
  }
  
  export default UserInfo