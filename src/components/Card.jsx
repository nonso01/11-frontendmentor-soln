import Button, { d, w } from "./Button";
import avatarAli from "../../images/avatar-ali.png";
import avatarAnisha from "../../images/avatar-anisha.png";
import avatarRichard from "../../images/avatar-richard.png";
import avatarShanai from "../../images/avatar-shanai.png";

export const log = console.log;

const cardData = [
  {
    id: 0,
    icon: "../../images/avatar-anisha.png",
    name: "Anisha Li",
    summary: ` “Manage has supercharged our team's workflow. The ability to maintain 
    visibility on larger milestones at all times keeps everyone motivated.”`,
  },
  {
    id: 1,
    icon: "../../images/avatar-ali.png",
    name: "Ali Bravo",
    summary: ` “We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”
  `,
  },
  {
    id: 2,
    icon: "../../images/avatar-richard.png",
    name: "Richard Watts",
    summary: ` “Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can't stop recommending them to everyone I talk to!”
  `,
  },
  {
    id: 3,
    icon: "../../images/avatar-shanai.png",
    name: "Shanai Gough",
    summary: `“Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
  // {
  //   id: 4,
  //   icon: "",
  //   name: "",
  //   summary: ``,
  // },
];

function userIsDown(e) {
  const _t = e.target;
  const _p = d.querySelector(".card");
  _p.addEventListener("mousemove", moving);

  if (_t.classList.contains("card__item")) {
    _t.classList.add("move");
  }
}

function userIsUp(e) {
  const _t = e.target;
  const _p = d.querySelector(".card");
  _p.removeEventListener("mousemove", moving);

  const _e = d
    .querySelectorAll(".card__item")
    .forEach((card) => card.classList.remove("move"));
}

function moving(e) {
  const [_x, _y] = [e.clientX, e.clientY];

  const _e = d.querySelectorAll(".card__item").forEach((card) => {
    const [_w, _h] = [card.clientWidth, card.clientHeight];
    const [left, top] = [_x - _w, _y - _h];

    card.style.setProperty("--x", `${left}px`);
    card.style.setProperty("--y", `${top}px`);
  });
}

function userIsTouching(e) {
  log(e.changedTouches);
}

export default function Card() {
  const cardItems = cardData.map((item) => (
    <div className="card__item" key={item.id}>
      <img
        src={item.icon}
        alt={item.name}
        style={{
          width: "4.0625rem",
          aspectRatio: "1",
          boxShadow: "0 2.5px 5px 0.25px rgba(0,0,0,0.2)",
          borderRadius: "50%",
          transform: "translate3d(0, -60%,0)",
        }}
      />
      <h4 className="title">{item.name}</h4>
      <p className="paragraph">{item.summary}</p>
    </div>
  ));

  return (
    <div
      className="card"
      onPointerDown={userIsDown}
      onPointerUp={userIsUp}
      // onTouchStart={userIsTouching}
    >
      <h3 className="title title-medium"> What they've said</h3>

      <div className="card__parent">{cardItems}</div>
      <Button />
    </div>
  );
}
