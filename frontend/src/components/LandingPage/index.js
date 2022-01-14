import "./landingPage.css"

const LandingPage = () => {
    return (
        <>
            <div className="image-wrapper">
                <h1>You are here to take NOTES, we got you!</h1>
                <div className="all-images">
                    <div className="image">
                        <img src="/images/photo-1517842645767-c639042777db.png" />
                    </div>
                    <div className="image">
                        <img src="/images/pexels-photo-3854816.png" />
                    </div>
                </div>
                <footer className="footer">
                    <p> Developed by Kenneth Dodson-Knapp</p>
                    <a href="https://github.com/k-dodsonknapp">Github</a>
                </footer>

            </div>
        </>
    )
}

export default LandingPage;