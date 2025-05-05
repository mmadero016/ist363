import heart from '../3images/heart.png';
import check from '../3images/check.png';
import chat from '../3images/chat.png';

export default function BreedGrid() {
    return (
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
          <img src={heart} alt="heart" className="img-fluid mb-3 rounded" />
            <h2>Health</h2>
            <p>
              Navigate your pet’s health with ease. Set reminders for meds and upcoming
              appointments when creating a profile specialized with your little one’s needs.
            </p>
          </div>
          <div className="col-md-4 mb-4">
          <img src={check} alt="check" className="img-fluid mb-3 rounded" />
            <h2>Track</h2>
            <p>
              Check off what your dog has done throughout the day: whether it’s going on a number
              of walks, eating at the appropriate times, or having a sweet treat – WaddlePup
              ensures your pet is on the right track.
            </p>
          </div>
          <div className="col-md-4 mb-4">
          <img src={chat} alt="chat" className="img-fluid mb-3 rounded" />
            <h2>Connect</h2>
            <p>
              Find others within the WaddlePup community who have pets like yours! Connect and chat
              with dog owners about questions, advice, or comments about your pet and theirs!
            </p>
          </div>
        </div>
      </section>
    );
  }
  