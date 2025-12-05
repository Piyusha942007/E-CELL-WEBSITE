import { Link } from "react-router-dom"
import "./team.css"

const TeamCard = ({ member, linkedin }) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <img src={member.image || "/placeholder.svg"} alt={member.name} />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-position">{member.position}</p>
        <div className="team-card-social">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin-icon"
              title="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Team = () => {
  const hodMember = {
    name: "Dr. Vijay Kotkar",
    position: "Patron & Strategic Mentor",
    image: "/E-CELL-WEBSITE/images/team/hod.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-vijay-kotkar-58987b20/",
  }

  const advisorMembers = [
    {
      name: "Dr.Vaishali Kulloli",
      position: "Faculty Advisor",
      image: "/E-CELL-WEBSITE/images/team/vaishali.png",
      linkedin: "https://www.linkedin.com/in/vaishali-kulloli-3b4685326/",
    },
    {
      name: "Bhagyesh Makhmale",
      position: "Student Advisor",
      image: "/E-CELL-WEBSITE/images/team/Bhagyesh.png",
      linkedin: "https://www.linkedin.com/in/bhagyesh-makhamale/",
    },
  ]

  return (
    <div id="team" className="team-container">
      <div className="team-header">
        <p className="team-header-subtitle">Our Leadership</p>
        <h1 className="team-header-title">Meet Our Leadership</h1>
      </div>

      <section className="team-section">
        {/* HOD (Single Card) */}
        <div className="team-grid-hod">
          <TeamCard member={hodMember} linkedin={hodMember.linkedin} />
        </div>

        {/* Advisors (Forced Side-by-Side on Mobile via CSS) */}
        <div className="team-grid-advisors">
          {advisorMembers.map((member, index) => (
            <TeamCard key={index} member={member} linkedin={member.linkedin} />
          ))}
        </div>
      </section>

      <div className="view-more-container">
        <Link to="/all-team" className="view-more-button">
          View All Members
        </Link>
      </div>
    </div>
  )
}

export default Team