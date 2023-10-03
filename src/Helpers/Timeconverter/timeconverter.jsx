function TimeConverter (id) {



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