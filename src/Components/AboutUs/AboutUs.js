import React from "react";

const styleContent = { marginTop: "150px" };
const TitleName = {
  fontFamily: "Garamond Premiere Pro",
  fontWeight: "400px",
  color: "#ce1327",
};
const styleBib = { ...TitleName, fontSize: "35px" };
const pliceBibliography = {
  color: "black",
  fontFamily: "DIN",
  fontWeight: "400",
  fontSize: "35px",
  marginTop: "-25px",
};
const Coordinate = {
  fontSize: "24px",
  fontFamily: "Garamond Premiere Pro",
  fontWeight: "400",
  color: "#000",
};
const paragraphStyle = { fontFamily: "DIN", fontWeight: "400px" ,fontSize:'25px'};
function AboutUs() {
  return (
    <div style={styleContent}>
      <div style={{ display: "flex",justifyContent:'space-around' }}>
        <div>
          <div>
            <img
              class="vc_single_image-img "
              src="https://www.ac-northafrica.com/wp-content/uploads/2019/07/team-max-404x380.jpg"
              width="404"
              height="380"
              alt="team-max"
              title="team-max"
            />
            <h3 style={TitleName}>Mr Samir ABDELLY</h3>
          </div>
          <div>
            <div>
              <h5 style={Coordinate}>Firm Name :</h5>
              <h5 style={pliceBibliography}> ABDELLY & ASSOCIATES law firm</h5>
            </div>
            <div>
              <h5 style={Coordinate}>Country :</h5>
              <h5 style={pliceBibliography}>Tunisia</h5>
            </div>
            <div>
              <h5 style={Coordinate}>Expertise :</h5>
              <h5 style={pliceBibliography}>Oil & Gas Law</h5>
            </div>
            <div>
              <h5 style={Coordinate}>Telephone :</h5>
              <h5 style={pliceBibliography}>+216 71 967 808</h5>
            </div>
            <div>
              <h5 style={Coordinate}>Fax</h5>
              <h5 style={pliceBibliography}>+216 71 967 799</h5>
            </div>
            <div>
              <h5 style={Coordinate}>Email</h5>
              <h5 style={pliceBibliography}>s.a@abdellyassocies.com</h5>
            </div>
          </div>
        </div>
        <div style={{ width: "500px" }}>
          <h3 style={styleBib}>Professional Biography</h3>
          <p style={paragraphStyle}>
            Ranked between Top 5 Influential Lawyer around the world:
            https://www.menapacs.com/samir-abdely-top-5-influential-lawyer-around-the-world/
          </p>
          <p style={paragraphStyle}>
            CEO of Abdelly & Associates group. Tunisian attorney at law before
            the Supreme Court, political commentator, and jurist. Former senior
            analyst with Baker McKenzie LLP, in New York, before moving and
            dealing with Algeria, Morocco, Algeria, Mauritania, and other
            African Countries.
          </p>
          <p style={paragraphStyle}>
            Mr. Abdelly has focused his legal practice in Oil and Gas matters
            around the Middle East and North Africa, international
            restructurings and cross-border transactions. As Lawyer, mediator
            and negotiator, he has long experience handling tax controversies,
            having represented world wide Oil and Gas companies for many years
            in a series of reported cases in the United States of America,
            including Tax Court, and advising clients on domestic and
            international tax planning and compliance.
          </p>
          <p style={paragraphStyle}>
            Abdelly & Associates LLC is among the largest management-side
            employment law firms in Tunisia, Algeria, Morocco, representing a
            wide range of Fortune 100 corporations, Oil and Gas, nuclear,
            multinational corporations, health care institutions and small
            businesses across all sectors of the economy.
          </p>
          <p style={paragraphStyle}>
            The firm’s attorneys are known for anticipating and finding
            solutions to the ever-expanding range of employment-related legal
            issues in order to avoid the time and cost of litigation. When
            litigation becomes necessary, the firm aggressively defends its
            clients and has a proven record of success. Abdelly & Associates LLC
            is ranked as a top tier arbitrator at the ICC and other arbitration
            courts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
<div class="team_info-detail">ABDELLY &amp; ASSOCIATES law firm</div>;
