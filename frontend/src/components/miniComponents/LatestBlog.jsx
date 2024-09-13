import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const LatestBlog = ({ heading, newClass, blogs }) => {
  return (
    <section
      className={
        newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"
      }
    >
      <h3>{heading}</h3>
      <div className="container">
        {blogs &&
          blogs.map((element) => {
            return (
              <Link to={`/blog/${element._id}`} className="card" key={element._id}>
                <img src={element.mainImage.url} alt="blog" />
                <span className="category">{element.category}</span>
                <h4>{element.title}</h4>
                <div className="writer_section">
                  <div className="author">
                    <img src={element.authorAvatar} alt="author_avatar" />
                    <p>{element.authorName}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

// Define PropTypes for validation
LatestBlog.propTypes = {
  heading: PropTypes.string.isRequired,
  newClass: PropTypes.string,
  blogs: PropTypes.array.isRequired,
};

export default LatestBlog;
