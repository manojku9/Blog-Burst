import { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Blog Burst is your go-to platform for discovering, sharing, and creating
          compelling content. Our mission is to foster a vibrant community where
          voices from around the world come together to share their stories,
          ideas, and insights. Whether youre an experienced writer or just
          starting your blogging journey, Blog Burst offers the perfect space
          to express yourself and connect with like-minded individuals.
          Our intuitive and easy-to-navigate design ensures a seamless
          blogging experience, whether youre writing, reading, or exploring new content.
          From travel and food to technology and lifestyle, Blog Burst covers a wide array
          of topics to cater to all interests. Dive into categories that fascinate you or explore something entirely new.


        </p>
        <p>
          Interact with a global community of readers and writers. Leave comments,
          share posts, and engage in meaningful discussions to build connections
          and grow your network. voluptatibus voluptatem nisi.Our intelligent algorithm
          curates content based on your interests and reading habits, ensuring you
          always have fresh and relevant articles to enjoy.
        </p>
        <p>
          At Blog Burst, we believe that everyone has a story worth sharing. Our
          platform empowers individuals to find their voice, develop their writing
          skills, and connect with a global audience. Join us today and become part
          of a thriving community where creativity knows no bounds.
        </p>
        <p>
          Showcase your unique style and personality with customizable profiles.
          Add a bio, upload a profile picture, and highlight your best work for
          others to see.Connect with other bloggers for collaborative projects,
          guest posts, and joint ventures. Grow your audience by tapping into
          new networks and sharing diverse perspectives.Optimize your posts with
          our built-in SEO tools to increase visibility and reach a broader audience.
          Get insights and tips on how to improve your blogs performance in search engines.

        </p>
        <b><h1 className="nam">  Created By</h1></b>
        <div className="mine">
             
          
          <img src="../manoj.jpeg " className="mine-img"></img>
          
        </div>
        <h4 className="nam">Name: L Manoj Kumar</h4>
        <h4 className="nam">Course: Btech | Branch: CSE</h4>
        <h4 className="nam">College: Silicon University</h4>
      </div>
    </article>
  );
};

export default About;