import React from "react";
// react plugin used to create charts
// reactstrap components
// core components
import Timeline from "views/Timeline/Timeline";
import "./work-experience.scss";

function WorkExperience() {
  const dates = [
    "1900",
    "1930",
    "1944",
    "1950",
    "1971",
    "1977",
    "1989",
    "1999",
    "2001",
    "2011",
  ];
  const issues = [
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/1.png",
      year: "1900",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/2.png",
      year: "1930",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png",
      year: "1944",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/4.png",
      year: "1950",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/5.png",
      year: "1971",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/6.png",
      year: "1977",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/7.png",
      year: "1989",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/8.png",
      year: "1999",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/9.png",
      year: "2001",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
    {
      imgUrl: "http://www.csslab.cl/ejemplos/timelinr/latest/images/10.png",
      year: "2011",
      paragraph:
        "Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.",
    },
  ];
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* <AnimatedCards /> */}
        <Timeline dates={dates} issues={issues} orientation="vertical" />
        {/* <div class="container">
        <div class="row">
          <div class="col">
            <div class="main-timeline">
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2018</span>
                  <div class="timeline-icon">
                    <i class="fa fa-rocket" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Web Development</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">JavaScript</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-cog" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Mongo DB</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">BlackPearl</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Angular</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-apple" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Laravel</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-edit" aria-hidden="true"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Creapure</h3>
                    <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
}

export default WorkExperience;
