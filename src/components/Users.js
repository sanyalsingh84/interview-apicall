import React from "react";

const Users = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt="" />
      <div className="info">
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Users;
