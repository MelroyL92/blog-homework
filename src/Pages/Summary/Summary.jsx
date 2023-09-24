import data from '/src/constants/data.json'



function Summary1 () {

     const list = data

    return (

        <ul>
        {list.map((items) => {
            return <li key={items.id}>
                {items.title}  ( {items.author} )
                {items.comments} reacties - {items.shares} keer gedeeld
            </li>
        })}
        </ul>


    )
}


export default Summary1