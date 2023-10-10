import france from '../assets/france.jpg'

const Images = () => {
    return (
        <div>
            <img src="/tree.jpg" alt="pic"/>
            <img src={france} alt="pic2"/>
        </div>
    )
}

export default Images