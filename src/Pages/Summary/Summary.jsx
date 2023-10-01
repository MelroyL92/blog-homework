
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";



function Summary () {


    const [items, toggleItems] = useState([]); // geef je de waarde die je verwacht terug te krijgen mee, in dit geval dus een lege array. Deze wordt gevuld met de waarde die de asynchrone functie terug geeft.
    const [error, toggleError] = useState(false);

    async function fetchOverviewInfo() {
        toggleError(false)
        try {
            const response = await axios.get('http://localhost:3000/posts');
            console.log(response.data)
            toggleItems (response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
        <div className="parent-summary-class">
            {items.length > 0 && items.map((item) => (   // controleren of er wel een array is met tenminste 1 in de array zit, doe je dat niet vuurt dit te vroeg af en krijg je een error terug
                <ul key={item.id} className="child-items-summary">
                    <li>
                        <Link to={`/BlogDetail/${item.id}`}><p>{item.title}  ( {item.author} )</p></Link>
                        <p>{item.comments} reacties - {item.shares} keer gedeeld</p>
                    </li>
                </ul>
            ))}
            <button type="button" onClick={fetchOverviewInfo}>overview</button>
            {error && <p>er is iets misgegaan</p>}
            {/* error is gericht op de fetchoverview function*/}
        </div>
        </>

    )
}


export default Summary