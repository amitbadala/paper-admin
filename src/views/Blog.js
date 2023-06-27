import React from "react";
import { Card } from "reactstrap";

const images = [
  "https://cdn.midjourney.com/4f6dcf1e-3bcc-4e1a-80e4-45bd9148d705/0_0.webp",
  //...
  "https://cdn.midjourney.com/c4973d9e-fa82-4125-a632-8dfd2963cd53/0_1.webp",
  "https://cdn.midjourney.com/3b7164ff-0891-4d93-b3cf-df16318b8b86/0_2.webp",
  //...
  "https://cdn.midjourney.com/cf485a65-220e-4789-8b15-11009ee7539f/0_0.webp",
];

const Blog = () => {
  return (
    <section id="blog" className="section content">
      <div>
        {images.map((image, i) => (
          <Card
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              height: "400px",
              position: "relative",
            }}
          >
            <div
              className="glass-card"
              style={{ position: "absolute", bottom: 0 }}
            >
              <h2>JavaScript Design Patterns — Module</h2>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
