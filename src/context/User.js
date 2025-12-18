import { useUserContext } from "./Context";

function User() {
  const user = useUserContext();
  console.log(user);
  return <div>{console.log(user.isSubcribed)}</div>;
}

export default User;
