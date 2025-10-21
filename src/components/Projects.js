import { Container, Row, Col, Tab, Nav, Dropdown } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectJS } from "./ProjectJS";
import { ProjectReact } from "./ProjectReact";
import { ProjectMern } from "./ProjectMern";
import { useState } from "react";
import "./css/projects.css";

const Projects = () => {
  const [sortOrderJS, setSortOrderJS] = useState("mostRelevant");
  const [sortOrderReact, setSortOrderReact] = useState("mostRelevant");
  const [sortOrderMern, setSortOrderMern] = useState("mostRelevant");

  const sortOptions = [
    { value: "mostRelevant", label: "Most Relevant" },
    { value: "newest", label: "Newest" },
    { value: "highest", label: "Highest" },
    { value: "lowest", label: "Lowest" },
  ];

  const renderSortSection = (sortOrder, setSortOrder) => (
    <div className="sort-section">
      <div className="sort-buttons d-none d-md-flex">
        {sortOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setSortOrder(opt.value)}
            className={sortOrder === opt.value ? "active" : ""}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="d-md-none mt-2">
        <div className="dropdown-wrapper">
          <label>Sort by:</label>
          <Dropdown>
            <Dropdown.Toggle className="mobile-dropdown">
              {sortOptions.find(opt => opt.value === sortOrder)?.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {sortOptions.map(opt => (
                <Dropdown.Item key={opt.value} onClick={() => setSortOrder(opt.value)}>
                  {opt.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );

  return (
    <div className="common-container">
      <section className="project-section" id="projects">
        <Container >
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <div className="allHeadings text-center">
                      <h1>Innovative Creations</h1>
                      <p>A curated collection of projects where code meets creativity.</p>
                    </div>

                    <Tab.Container defaultActiveKey="javascript">
                      <Nav variant="pills" className="nav-pills justify-content-center mb-4">
                        {["javascript", "react", "mern"].map(tab => (
                          <Nav.Item key={tab}>
                            <Nav.Link eventKey={tab} className="pill-tab">
                              {tab.toUpperCase()}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>

                      <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="javascript">
                          {renderSortSection(sortOrderJS, setSortOrderJS)}
                          <ProjectJS sortOrder={sortOrderJS} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="react">
                          {renderSortSection(sortOrderReact, setSortOrderReact)}
                          <ProjectReact sortOrder={sortOrderReact} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="mern">
                          {renderSortSection(sortOrderMern, setSortOrderMern)}
                          <ProjectMern sortOrder={sortOrderMern} />
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

  );
};

export default Projects;
