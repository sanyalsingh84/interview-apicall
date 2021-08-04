import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://reqres.in/api/users?page=${currentPage}`
        );
        if (data) {
          let temp = [];
          for (let i = 1; i <= data.total; i++) {
            temp.push(i);
          }
          setTotalPages(temp);
          setUsers(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  // console.log(users);
  return (
    <>
      <div className="container">
        {users &&
          users.map((user) => {
            return <Users key={user.id} user={user} />;
          })}
      </div>
      <div className="pages">
        <p>Pages:</p>
        {totalPages &&
          totalPages.map((page, i) => (
            <button
              onClick={() => handleClick(page)}
              key={i}
              className={currentPage === page ? "btn btn-active" : "btn"}>
              {page}
            </button>
          ))}
      </div>
    </>
  );
};

export default App;
