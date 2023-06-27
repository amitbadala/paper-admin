import {
  Card,
  CardHeader,
  div,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const HumanCapital = () => {
  return (
    <>
      <div className="navbar company-header navbar-sticky bg-glass-effect-light">
        <h4>
          <a href="https://www.google.com/url?q=https://human.capital/&amp;sa=D&amp;source=editors&amp;ust=1687717233802901&amp;usg=AOvVaw3FB52oo1ZbECsNSfjFFDyR">
            Human Capital
          </a>
          , Remote —Software Engineer
        </h4>
        <span>🗓️ APRIL 2020 - APRIL 2023 (3.1 yrs)</span>
      </div>
      <div style={{ padding: 25, paddingTop: 0 }} className="card-body">
        <div>
          <blockquote style={{ margin: "20px 0px" }}>
            A venture firm with over $1.6B in capital commitment. <br />
            Its portfolio includes &gt; 130 companies, including around 15 that
            became unicorns, such as Brex, Commure, and Snowflake
          </blockquote>
          <br />
          <p>
            <strong>VIP (Venture Intelligence Platform)</strong> - A web app
            that streamlines Investment Decision-making and Hiring.
          </p>
          <ol start="1">
            <li>
              Designed a scalable and configurable FE Architecture by
              implementing best practices. Clear-defined folder structure with
              accompanying guidelines for proper file storage &amp; coding
              standards.
            </li>
            <li>
              Used my knowledge of UX design principles to create wireframes
              that prioritize web elements for User Adoption. Used{" "}
              <a href="https://www.google.com/url?q=https://balsamiq.com/&amp;sa=D&amp;source=editors&amp;ust=1687717233805790&amp;usg=AOvVaw3-6eOpOmzBBVpFsOY8hDiO">
                Balsamiq
              </a>
              for wireframes.
            </li>
            <li>
              Converted wireframes into functional and reusable components using
              React, while also ensuring code quality through comprehensive unit
              testing with the Jest framework. Employed the LESS CSS
              pre-processor for styling purposes.
            </li>
            <li>
              Implemented Google OAuth login, with support for features such as
              one-tap sign-in and domain-specific access control.
            </li>
            <li>
              Implemented Role Based Access Control (RBAC) across all components
              and pages.
            </li>
            <li>
              Performance optimization by minimizing unnecessary renders and
              avoiding redundant backend API calls by using debouncing for
              reactive effects.
            </li>
            <li>
              Provided mentorship to the team on FE, primarily through extensive
              Git code reviews.
            </li>
          </ol>
          <p className="project-header">
            <strong>VIP Backend</strong>
          </p>
          <ol start="1">
            <li>
              Utilized the Python, Fast-API framework, and PyTest library to
              develop RESTful APIs in a test-driven manner. Deployed the APIs on
              Docker containers to enable seamless integration with third-party
              services and Front End applications.
            </li>
            <li>
              Extended Alembic Operations to enable easier view creations.
              Published a{" "}
              <a href="https://www.google.com/url?q=https://medium.com/@amitbadala/extend-alembic-operations-to-support-custom-functionalities-c6d1da34e288&amp;sa=D&amp;source=editors&amp;ust=1687717233810670&amp;usg=AOvVaw3K8_-9mBNOt1HGPRTeAotL">
                Medium Article
              </a>{" "}
              for the same.
            </li>
            <li>
              Achieved 2X improvement in API response time by writing optimized
              queries with SQLAlchemy and implementing Postgres views for
              complex operations. This also resolved Memory clogging issues
              arising from heavy operations.
            </li>
            <li>
              Refactored the entire test suite (~2000 lines) which increased the
              test speed by 600%```html from 45 mins to 7 mins. Saved a lot of
              DEV time.
            </li>
            <li>Added AWS functionality to upload resumes.</li>
          </ol>
          <p className="project-header">
            <strong>VIP Analytics </strong>
          </p>
          <ol start="1">
            <li>
              Developed intricate Postgres queries to extract unstructured JSON
              data, which was then utilized to generate insightful
              visualizations and metrics.{" "}
            </li>
            <li>
              Paint data-driven stories at both organizational and individual
              levels by presenting findings through the Zoho Analytics
              dashboard.
              <br />
            </li>
          </ol>
          <p className="project-header">
            <strong>Adhoc Responsibilities </strong>
          </p>
          <ol start="1">
            <li>Convert legacy User portal to Mobile Responsive site.</li>
            <li>
              Oversaw the maintenance of the company's website, with Sanity Cms
              (a headless CMS) and Webflow.
            </li>
            <li>
              Implemented an Algorithm to map co-founders applying for
              fellowship programs &amp; automate email campaigns for different
              stages of the program.
            </li>
            <li>
              Designed Node.js migration scripts to facilitate data transfer
              between sourcing tools such as GEM (via AWS) and Zoho. <br />
              Running these scripts with Heroku Scheduler for regular syncing.{" "}
            </li>
            <li>
              Integrated third-party applications like Google Calendar, Slack,
              Airtable, Coda, Twilio, Openphone, and Excel sheets to support
              existing workflows and facilitate communication between these
              apps, and created an integrated system.
            </li>
          </ol>
          <p></p>
        </div>
      </div>
      <CardFooter></CardFooter>
    </>
  );
};

export default HumanCapital;
