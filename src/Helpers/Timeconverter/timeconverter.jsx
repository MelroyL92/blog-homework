import data from '/src/constants/data.json'

function TimeConverter () {

    const list = data


    const date = new Date(list[0].created)

    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
        const dutchDate = date.toLocaleDateString('nl-NL', longOptions);


        return (

            <span>{dutchDate}</span>



)
}

export default TimeConverter