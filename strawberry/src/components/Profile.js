import Me from "../resources/Professional.jpg";


export default function Profile() {
  return (
    <div>
      <div className="Profile-box">
        <img src={Me} className="Profile-pic" alt="Divay Gupta" />
        <div className="Profile-text-box">
          <div id="My-info">
            <div className="Profile-text-top">Hi, I am</div>
            <div className="Profile-text-bottom">Divay Gupta</div>
          </div>
          <div id="Job-desc">Aspiring Software Engineer</div>
        </div>
      </div>
    </div>
  );
}
