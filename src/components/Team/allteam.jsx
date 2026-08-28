import { useNavigate } from "react-router-dom"
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
          {linkedin ? (
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
          ) : null}
        </div>
      </div>
    </div>
  )
}

const AllTeam = () => {
  const navigate = useNavigate()

  // 1. Advisors
  const advisors = [
    {
      name: "Himanshee Jaiswal",
      position: "Student Advisor",
      image: "/images/team/Himanshee.jpg",
      linkedin: "https://www.linkedin.com/in/himansheejaiswal",
    },
  ]

  // 2. High Command / Core Leadership
  const highCommand = [
    {
      name: "Krish Sarode",
      position: "Chairperson",
      image: "/images/team/Krish.JPG",
      linkedin: "https://www.linkedin.com/in/krish-rajendra-sarode-68b53332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Advait Kulkarni",
      position: "Head of Operations",
      image: "/images/team/Advait.jpg",
      linkedin: "https://www.linkedin.com/in/advait-kulkarni-k168?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Ritika Kolte",
      position: "Deputy Chairperson",
      image: "/images/team/Ritika.jpg",
      linkedin: "https://www.linkedin.com/in/ritikakolte",
    },
  ]

  // 3. Chairs & Secretariat
  const chairsAndSecretaries = [
    {
      name: "Shreyas Kadav",
      position: "Chair, External Affairs",
      image: "/images/team/Shreyas.png",
      linkedin: "https://www.linkedin.com/in/shreyas-kadav?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Swanandi Sawant",
      position: "Chair, Internal Affairs",
      image: "/images/team/Swanandi.jpg",
      linkedin: "https://www.linkedin.com/in/swanandi-sawant",
    },
    {
      name: "Aditya Kute",
      position: "Chair, Publicity & Promotions",
      image: "/images/team/ADITYA.png",
      linkedin: "https://www.linkedin.com/in/aditya-kute-732bb8328?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Rugved Joshi",
      position: "Secretary",
      image: "/images/team/Rugved.png",
      linkedin: "https://www.linkedin.com/in/rugved-joshi-3a65b7385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Shreekar Markad",
      position: "Joint Secretary",
      image: "/images/team/Shreekar.jpg",
      linkedin: "",
    },
  ]

  // 4. Finance Team
  const financeTeam = [
    {
      name: "Atharva Kulkarni",
      position: "Head of Finance",
      image: "/images/team/Atharva.PNG",
      linkedin: "",
    },
    {
      name: "Pranav Late",
      position: "Joint Head of Finance",
      image: "/images/team/Pranav.jpg",
      linkedin: "https://www.linkedin.com/in/pranav-late",
    },
  ]

  // 5. Technical Operations
  const techTeam = [
    {
      name: "Piyusha Amrutkar",
      position: "Head of Technical Ops",
      image: "/images/team/Piyusha.jpg",
      linkedin: "https://www.linkedin.com/in/piyusha-amrutkar-901918328/",
    },
    {
      name: "Sanskruti Kale",
      position: "Technical Member",
      image: "/images/team/Sanskruti.png",
      linkedin: "https://www.linkedin.com/in/sanskruti-kale-8270523aa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Charudatta Nikumbe",
      position: "Technical Member",
      image: "/images/team/Charudatta.png",
      linkedin: "https://www.linkedin.com/in/charudattanikumbe-devsecops?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Rudransh Gupta",
      position: "Technical Member",
      image: "/images/team/RUDRANSH.png",
      linkedin: "https://www.linkedin.com/in/rudransh-gupta-629742425?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Vedant Parsewar",
      position: "Technical Member",
      image: "/images/team/Vedant.jpg",
      linkedin: "https://www.linkedin.com/in/vedant-parsewar-819993376?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ]

  // 6. Events Team
  const eventTeam = [
    {
      name: "Siddhant Ganjewar",
      position: "Event Head",
      image: "/images/team/Siddhant.png",
      linkedin: "https://www.linkedin.com/in/siddhant-ganjewar-86650b3a3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Tanishka Kulkarni",
      position: "Event Co-Head",
      image: "/images/team/Tanishka.jpg",
      linkedin: "https://www.linkedin.com/in/tanishka-kulkarni-9b78a3370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Sakshi Patil",
      position: "Event Member",
      image: "/images/team/Sakshi.jpeg",
      linkedin: "https://www.linkedin.com/in/sakshi-patil-571904375?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Sahil Rathod",
      position: "Event Member",
      image: "/images/team/Sahil.jpg",
      linkedin: "https://www.linkedin.com/in/sahil-rathod-8a741a376?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Sharvari Karekar",
      position: "Event Member",
      image: "/images/team/Sharvari.png",
      linkedin: "https://www.linkedin.com/in/sharvari-karekar-564690394",
    },
  ]

  // 7. Social Media Team
  const socialMediaTeam = [
    {
      name: "Aryan Digambare",
      position: "Social Media Head",
      image: "/images/team/ARYAN.jpg",
      linkedin: "https://www.linkedin.com/in/aryan-digambare-76105732b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Mrunmayee Khot",
      position: "Social Media Co-Head",
      image: "/images/team/Mrunmayee.jpg",
      linkedin: "https://www.linkedin.com/in/mrunmayee-khot-14a06132b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Purva Khairnar",
      position: "Social Media Member",
      image: "/images/team/Purva.jpeg",
      linkedin: "https://www.linkedin.com/in/purva-khairnar-b35902388?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Sarthak Bhosale",
      position: "Social Media Member",
      image: "/images/team/Sarthak.jpeg",
      linkedin: "",
    },
  ]

  // 8. Executive Team
  const executiveTeam = [
    {
      name: "Nilay Dudhane",
      position: "Executive Head",
      image: "/images/team/Nilay.jpeg",
      linkedin: "https://www.linkedin.com/in/nilay-dudhane-93b620291?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Suhani Chemate",
      position: "Executive Co-Head",
      image: "/images/team/SUHANI.jpg",
      linkedin: "https://www.linkedin.com/in/suhani-chemate-248821392",
    },
    {
      name: "Manasi Pawane",
      position: "Executive Member",
      image: "/images/team/Manasi.jpg",
      linkedin: "https://www.linkedin.com/in/manasi-vikas-pawane-36a89a384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Yash Rajbhoj",
      position: "Executive Member",
      image: "/images/team/Yash.jpg",
      linkedin: "https://www.linkedin.com/in/yash-rajbhoj-06b6b3370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Bhoomika Rao",
      position: "Executive Member",
      image: "/images/team/Bhoomika.jpg",
      linkedin: "https://www.linkedin.com/in/bhoomika-rao-170025429",
    },
  ]

  // 9. Design Team
  const designTeam = [
    {
      name: "Manthan Patil",
      position: "Design Head",
      image: "/images/team/Manthan.jpg",
      linkedin: "https://www.linkedin.com/in/manthan-patil-738812377?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Tanya Israni",
      position: "Design Co-Head",
      image: "/images/team/Taniya.jpg",
      linkedin: "https://www.linkedin.com/in/taniya-israni-a56352325",
    },
    {
      name: "Vaishnavi Deore",
      position: "Design Member",
      image: "/images/team/Vaishnavi.jpg",
      linkedin: "https://www.linkedin.com/in/vaishnavi-deore-439886396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Pragati Joshi",
      position: "Design Member",
      image: "/images/team/PRAGATI.png",
      linkedin: "https://www.linkedin.com/in/pragati-joshi-16228b392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ]

  return (
    <div className="team-container">
      <div className="team-header">
        <p className="team-header-subtitle">Meet the Team</p>
        <h1 className="team-header-title">E-CELL Team 2025</h1>
      </div>

      <section className="team-section">
        <div className="hierarchy-section">
          {/* 1. Advisors */}
          <div className="hierarchy-row">
            {advisors.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 2. High Command */}
          <div className="hierarchy-row">
            {highCommand.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 3. Chairs & Secretariat */}
          <div className="hierarchy-row">
            {chairsAndSecretaries.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 4. Finance Team */}
          <div className="hierarchy-row">
            {financeTeam.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 5. Technical Operations */}
          <div className="hierarchy-row">
            {techTeam.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 6. Events Team */}
          <div className="hierarchy-row">
            {eventTeam.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 7. Social Media Team */}
          <div className="hierarchy-row">
            {socialMediaTeam.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 8. Executive Team */}
          <div className="hierarchy-row">
            {executiveTeam.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>

          {/* 9. Design Team */}
          <div className="hierarchy-row">
            {designTeam.map((member, index) => (
              <TeamCard key={index} member={member} linkedin={member.linkedin} />
            ))}
          </div>
        </div>
      </section>

      <div className="back-button-container">
        <button onClick={() => navigate("/team")} className="back-button">
          Back to Leadership
        </button>
      </div>
    </div>
  )
}

export default AllTeam