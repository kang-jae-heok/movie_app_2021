import PropType from "prop-type";

function Movie(){
    return(
     <h1>hello</h1>
    )
}
Movie.PropType = {id:PropType.number.isRequired,
    year:PropType.number.isRequired,
    title:PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
    }

export default Movie