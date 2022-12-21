import { useParams } from "react-router-dom";
import greyStar from "@/assets/greyStar.png";
import orangeStar from "@/assets/orangeStar.png";
import "./rating.css";

export default function Rating({ ratingArray, maxRate }) {
    const params = useParams()
    const id = params.id

    let ratings = []
    let coloredStar = true

    for (let i = 0; i < `${maxRate}`; i++) {
        if (i === parseInt(ratingArray)) {
            coloredStar = false
        }
        if (coloredStar === true) {
            ratings.push(<img key={i + id} className="stars" src={orangeStar} alt={`${ratingArray}/${maxRate}`} />)
        } else {
            ratings.push(<img key={i + id} className="stars" src={greyStar} alt={`${ratingArray}/${maxRate}`} />)
        }
    }
    return ratings
};