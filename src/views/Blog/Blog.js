import React from "react";
import { Card } from "reactstrap";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blog.scss";

const images = [
  "https://cdn.midjourney.com/4f6dcf1e-3bcc-4e1a-80e4-45bd9148d705/0_0.webp",
  //...
  "https://cdn.midjourney.com/c4973d9e-fa82-4125-a632-8dfd2963cd53/0_1.webp",
  "https://cdn.midjourney.com/3b7164ff-0891-4d93-b3cf-df16318b8b86/0_2.webp",
  //...
  "https://cdn.midjourney.com/cf485a65-220e-4789-8b15-11009ee7539f/0_0.webp",
  "https://cdn.midjourney.com/c4973d9e-fa82-4125-a632-8dfd2963cd53/0_1.webp",
  "https://cdn.midjourney.com/3b7164ff-0891-4d93-b3cf-df16318b8b86/0_2.webp",
  //...
  "https://cdn.midjourney.com/cf485a65-220e-4789-8b15-11009ee7539f/0_0.webp",
];

const Blog = () => {
  const blogs = [
    {
      blogUrl:
        "https://medium.com/bitsrc/mastering-javascript-design-pattern-module-7bbdb8e2554e",
      title: "Mastering JavaScript Design Patterns",
      bgImage:
        "https://cdn.midjourney.com/4f6dcf1e-3bcc-4e1a-80e4-45bd9148d705/0_0.webp",
      tags: ["#javascript", "#medium"],
    },
    {
      blogUrl:
        "https://medium.com/@amitbadala/extend-alembic-operations-to-support-custom-functionalities-c6d1da34e288",
      title: "Extend Alembic Operations to support View functionalities",
      bgImage:
        "https://cdn.midjourney.com/c4973d9e-fa82-4125-a632-8dfd2963cd53/0_1.webp",
      tags: ["#python", "#SQLAlchemy"],
    },
    {
      blogUrl: "https://goofyai.com/chatgpt-vs-bard-for-programmers/",
      title: "ChatGpt vs Bard for Programmers",
      bgImage: "https://goofyai.com/wp-content/uploads/2023/06/image.png",
      tags: ["#chatgpt", "#bard"],
    },
    {
      blogUrl:
        "https://www.linkedin.com/posts/amitbadala_javascript-closure-through-comic-strip-activity-7069701056749780993-PzUk?utm_source=share&utm_medium=member_desktop",
      title: "Understanding Javascript Closure through Comics",
      bgImage:
        "https://cdn.midjourney.com/5c86108c-a8fc-4769-a80d-d2b83cf448f2/0_1.webp",
      tags: ["#javascript", "#midjourney"],
    },
    {
      blogUrl:
        "https://www.linkedin.com/posts/amitbadala_for-those-who-learn-to-pick-themselves-up-activity-7061776419508432896-8JL3?utm_source=share&utm_medium=member_desktop",
      title: "Fusing Jack & Jill with Marketing",
      bgImage:
        "https://cdn.midjourney.com/02875ebc-c5f6-4749-b47d-e7c3c7f790a0/0_1.webp",
      tags: ["#ai", "#chatgpt", "#midjourney"],
    },
    {
      blogUrl:
        "https://medium.com/@amitbadala/how-to-convey-your-message-effectively-with-images-a-k-a-kungfu-content-94c0965ed3c",
      title: "Convey your message effectively with Kung fu Panda",
      bgImage:
        "https://cdn.midjourney.com/867c7f3b-1231-4f00-b166-3c2e69057441/0_0.webp",
      tags: ["#effective", "#writing"],
    },
  ];

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section id="blog" className="section">
      <div className="container">
        <div style={{ width: "95%" }}>
          <h3 style={{ textAlign: "center", fontSize: 22, marginBottom: 40 }}>
            My recent favourite thing to do is explore AI tools like{" "}
            <span className="underline-magical">ChatGPT & Midjourney</span> &
            writing about them. <br />
            On usual days you'll find me writing about my learnings in
            programming & other fields
          </h3>
          <Slider {...settings}>
            {blogs.map((blog, i) => (
              <div key={i}>
                <Card
                  style={{
                    backgroundImage: `url(${blog.bgImage})`,
                    backgroundSize: "cover",
                    height: "350px",
                    width: "230px",
                    position: "relative",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="glass-card">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <h5
                      style={{
                        cursor: "pointer",
                      }}
                      className="text-shadow"
                    >
                      <a target="_blank" rel="noreferrer" href={blog.blogUrl}>
                        {blog.title}
                      </a>
                    </h5>
                    <div
                      className="hash-tag"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ margin: "0px 5px", fontWeight: "bold" }}
                        >
                          {tag}
                        </span>
                        // <Icon icon={tag} textAnchor="Python"></Icon>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h4>You can find more of my blogs and post on these sites</h4>
          <div className="blog-sites">
            <a
              href="https://medium.com/me/stories/public"
              rel="noreferrer"
              target="_blank"
            >
              <Icon fontSize={24} icon={"logos:medium"}></Icon>
            </a>
            <a
              href="https://www.linkedin.com/in/amitbadala/recent-activity/all/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon fontSize={28} icon={"logos:linkedin"} />
            </a>
            <a rel="noreferrer" href="https://goofyai.com/" target="_blank">
              <img
                height={45}
                alt="..."
                src={require("assets/img/goofyai.png")}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
