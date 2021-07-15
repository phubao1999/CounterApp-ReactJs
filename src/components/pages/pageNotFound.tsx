import { useHistory } from 'react-router-dom';
import '../../scss/pageNotFound.scss';

export default function PageNotFound() {
    const navigate = useHistory();

    const backToHome = () => {
        navigate.push("/");
    }

    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contact_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not available!</p>
                                <p className="link_404" onClick={backToHome}>Go to Home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}