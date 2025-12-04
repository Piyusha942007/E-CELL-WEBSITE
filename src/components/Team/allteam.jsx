"use client"

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

const AllTeam = () => {
  const navigate = useNavigate()

  const teamData = {
    coreTeam: [
      {
        name: "Aditya Divate",
        position: "Head of Operations",
        image: "/E-CELL-WEBSITE/images/team/adityaa.jpeg",
        linkedin: "https://www.linkedin.com/in/aditya-divate-4b7b5726b/",
      },
      {
        name: "Advait Kulkarni",
        position: "Chair, ECELL",
        image: "/E-CELL-WEBSITE/images/team/Advait.jpg",
        linkedin: "https://www.linkedin.com/in/advait-kulkarni-k168/",
      },
      {
        name: "Kadambari Khedekar",
        position: "Deputy Chair",
        image: "/E-CELL-WEBSITE/images/team/.jpg",
        linkedin: "https://www.linkedin.com/in/kadambari-arvind-khedekar-203100327/",
      },
      {
        name: "Siddhesh Kirve",
        position: "Secretary",
        image: "/E-CELL-WEBSITE/images/team/Siddhesh.jpg",
        linkedin: "https://www.linkedin.com/in/siddhesh-kirve-2aa2ba329/",
      },
      {
        name: "Krish Sarode",
        position: "Head of Finance",
        image: "/E-CELL-WEBSITE/images/team/Krish.jpg",
        linkedin: "https://www.linkedin.com/in/krish-sarode-68b53332b/",
      },
      {
        name: "Disha Marne",
        position: "Joint Head of Finance and Resources",
        image: "/E-CELL-WEBSITE/images/team/.jpg",
        linkedin: "https://www.linkedin.com/in/disha-marne-64a74a292/",
      },
    ],
    executiveTeam: [
      {
        name: "Himanshee Jaiswal",
        position: "Chair, External Affairs",
        image: "/E-CELL-WEBSITE/images/team/Himanshee.jpg",
        linkedin: "https://www.linkedin.com/in/himansheejaiswal/",
      },
      {
        name: "Akash Patil",
        position: "Joint Head of Execution and Personal Relations",
        image: "/E-CELL-WEBSITE/images/team/akashh.jpeg",
        linkedin: "https://www.linkedin.com/in/akash-patil-b1119a32a/",
      },
      {
        name: "Ketaki Shivange",
        position: "Member",
        image: "/E-CELL-WEBSITE/images/team/Ketaki.jpg",
        linkedin: "https://www.linkedin.com/in/ketaki-shivange-18005932b/",
      },
      {
        name: "Ritika Kolte",
        position: "Member",
        image: "/E-CELL-WEBSITE/images/team/Ritika.jpg",
        linkedin: "https://www.linkedin.com/in/kolte-ritika-889832312/",
      },
    ],
    technicalTeam: [
      {
        name: "Piyusha Amrutkar",
        position: "Head of Technical Operations",
        image: "/E-CELL-WEBSITE/images/team/Piyusha.jpg",
        linkedin: "https://www.linkedin.com/in/piyusha-amrutkar-901918328/",
      },
      {
        name: "Samiksha Ner",
        position: "Joint Head of Technical Operations",
        image: "/E-CELL-WEBSITE/images/team/Samiksha.png",
        linkedin: "https://www.linkedin.com/in/samikshaner/",
      },
    ],
    socialMediaTeam: [
      {
        name: "Anushka Agam",
        position: "Head and content strategist for online presence,branding and social media",
        image: "/E-CELL-WEBSITE/images/team/ANUSHKA.jpg",
        linkedin: "https://www.linkedin.com/in/anushka-agam-1b552632b/",
      },
      {
        name: "Aryan Digambare",
        position: "Joint Head for online presence,branding and social media",
        image: "/E-CELL-WEBSITE/images/team/Aryan.jpg",
        linkedin: "https://www.linkedin.com/in/aryan-digambare-76105732b/",
      },
      {
        name: "Mrunmayee Khot",
        position: "Member",
        image: "/E-CELL-WEBSITE/images/team/Mrunmayee.jpg",
        linkedin: "https://www.linkedin.com/in/mrunmayee-khot-14a06132b/",
      },
    ],
    marketingTeam: [
      {
        name: "Esha Pansare",
        position: "Head of Marketing",
        image: "/E-CELL-WEBSITE/images/team/Esha.png",
        linkedin: "https://www.linkedin.com/in/esha-pansare-6106ab290/",
      },
      {
        name: "Shreyas Kadav",
        position: "Chair, Internal Affairs",
        image: "/E-CELL-WEBSITE/images/team/Shreyas.png",
        linkedin: "https://www.linkedin.com/in/shreyas-kadav-67b213323/",
      },
      {
        name: "Aditya Kute",
        position: "Member",
        image: "/E-CELL-WEBSITE/images/team/.jpg",
        linkedin: "https://www.linkedin.com/in/aditya-kute-732bb8328/",
      },
      {
        name: "Shridhar Kulkarni",
        position: "Member",
        image: "/E-CELL-WEBSITE/images/team/Shridhar.jpg",
        linkedin: "https://www.linkedin.com/in/shridhar-kulkarni-374b93200/",
      },
    ],
    designTeam: [
      {
        name: "Utkarsh Kashid",
        position: "Head of Design and Visual Communications",
        image: "/placeholder.svg",
        linkedin: "https://www.linkedin.com/in/utkarsh-kashid-44843132b/",
      },
      {
        name: "Aditya Kashid",
        position: " Joint Head of Design and Visual Communications ",
        image: "/E-CELL-WEBSITE/images/team/Adityaka.jpg",
        linkedin: "https://www.linkedin.com/in/adityakashid746/",
      },
      {
        name: "Manthan Patil",
        position: "Member",
        image: "/E-CELL-WEBSITE/images/team/Manthan.jpg",
        linkedin: "https://www.linkedin.com/in/manthan-patil-738812377/",
      },
    ],
  }

  const TeamSection = ({ title, members }) => (
    <section className="team-section">
      <h2 className="section-title">{title}</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <TeamCard key={index} member={member} linkedin={member.linkedin} />
        ))}
      </div>
    </section>
  )

  return (
    <div className="team-container">
      <div className="team-header">
        <p className="team-header-subtitle">Meet the Team</p>
        <h1 className="team-header-title">E-CELL Team 2025</h1>
      </div>

      <TeamSection title="Core Team" members={teamData.coreTeam} />
      <TeamSection title="Executive Team" members={teamData.executiveTeam} />
      <TeamSection title="Technical Team" members={teamData.technicalTeam} />
      <TeamSection title="Social Media Team" members={teamData.socialMediaTeam} />
      <TeamSection title="Marketing Team" members={teamData.marketingTeam} />
      <TeamSection title="Design Team" members={teamData.designTeam} />

      <div className="back-button-container">
        <button onClick={() => navigate("/team")} className="back-button">
          Back to Leadership
        </button>
      </div>
    </div>
  )
}

export default AllTeam
