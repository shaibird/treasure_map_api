import HeaderImage from "./headerImage.svg"
import './HeaderImage.css'

export const HomeImage = () => {
    return <section className="header">
        <img className="headerImg" src={HeaderImage} alt={"Mountains"} />
    </section>

}