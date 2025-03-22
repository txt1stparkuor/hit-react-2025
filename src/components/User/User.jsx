import "./User.css";
import users from "../../data/post.json";
function User() {
  return (
    <table className="users">
      <tr className="first-row">
        <td>Id</td>
        <td>Title</td>
        <td>Body</td>
      </tr>
      {users.map((user, index) => {
        let { id, title, body } = user;
        return (
          <tr className="user" key={index}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default User;
