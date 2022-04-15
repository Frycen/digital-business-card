import './App.css'

function Info() {
    return (
        <div className="card-border modal-content">
            <div className="modal-dialog">
                <div className="about">
                    <h2>About me</h2>
                    <p>
                        Hello! My name is Ivan Matias, an applied mathmatics student from Cal Poly Pomona!
                        I'm a developer who is always on the lookout to learn and meet new people.
                    </p>
                </div>
                <div className="interests">
                    <h2>Interests</h2>
                    <ul>
                        <li>Philosophy</li>
                        <li>Drawing and Graphic Design</li>
                        <li>Video Games</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info;