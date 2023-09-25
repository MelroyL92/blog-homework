import data from '/src/constants/data.json'



function Summary1 () {

     const list = data

    return (
        <div className="parent-summary-class">
            {list.map((items) => (
            <div key={items.id} className="child-items-summary">
                <p>{items.title}  ( {items.author} )</p>
                <p>{items.comments} reacties - {items.shares} keer gedeeld</p>
            </div>
            ))}
        </div>
    )
}


export default Summary1