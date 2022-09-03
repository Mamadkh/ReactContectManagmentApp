

import { Background , Cyan} from "../helpers/Colors"

export default function Footer() {


    return (
        <>
            <footer className="py-3 shadow-lg" style={{ backgroundColor: Background}}>
                <div className="d-flex justify-content-around "  >
                    <a href="https:/www.facebook.com/" style={{ color: Cyan }}>
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/?lang=en-ca" style={{ color: Cyan }}>
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" style={{ color: Cyan }}>
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammadreza-khorsand-1067991b4/" style={{ color: Cyan }}>
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Mamadkh" style={{ color: Cyan }}>
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </footer>
        </>
    )

}