import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);

  const [users, setUsers] = useState([]);

  useEffect(() => setUsers(data?.getAllUsers), [data]);

  return loading ? (
    <div>Loading users...</div>
  ) : (
    <div>
      {users?.map((user, i) => (
        <h1 key={i}>{user.firstName}</h1>
      ))}
    </div>
  );
}

export default GetUsers;
