import {ReactComponent as StarFull} from 'assets/images/starfull.svg';
import {ReactComponent as StarHalf} from 'assets/images/starhalf.svg';
import {ReactComponent as StarEmpty} from 'assets/images/starempty.svg';
import './styles.css';


export function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
