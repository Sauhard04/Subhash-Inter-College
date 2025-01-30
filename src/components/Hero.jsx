import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <main>
                <div className="text-box">
                    <h1>Welcome to Subhash Inter College</h1>
                    <p>
                    Subhash Inter College is a government school dedicated to providing quality education up to the 12th grade. With a commitment to academic excellence, the institution offers a well-structured curriculum at an affordable fee, ensuring education is accessible to all. The college is staffed with highly knowledgeable and experienced teachers who strive to nurture students' intellectual and personal growth. Equipped with essential facilities and a disciplined learning environment, Subhash Inter College prepares students for a bright future while promoting strong values and holistic development.
                    </p>
                    <Link to="/Contact" className="hero-btn">Contact Us Here</Link>
                </div>
            </main>
        </div>
    )
}

export default Hero;