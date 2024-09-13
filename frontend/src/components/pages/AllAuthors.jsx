import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [mode,] = useState("dark"); // Initial state for mode

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/authors",
          { withCredentials: true }
        );
        setAuthors(data.authors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <section className={mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"}>
      <h3>All Authors</h3>
      <div className="container ">
        {authors && authors.length > 0 ? (
          authors.map((author) => (
            <div className="card" key={author._id}>
              {author.avatar && <img src={author.avatar.url} alt="author" />}
              <p>{author.name}</p>
              <p>{author.role}</p>
            </div>
          ))
        ) : (
          <BeatLoader color="gray" size={30} />
        )}
      </div>
    </section>
  );
};

export default AllAuthors;
