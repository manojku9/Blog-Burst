import  { useContext } from "react";
import LatestBlog from "../miniComponents/LatestBlog";
import { Context } from "../../main";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlog blogs={blogs} title={"Blogs"} />
    </article>
  );
};

export default Blogs;