import {Navbar} from '../components/Navbar/Navbar';
import Styles from '../styles/feedback.module.css';
import {FeedbackElement} from "../components/FeedbackElement/FeedbackElement";
export const Feedback: React.FC = () => {
    return (<>
            <Navbar/>
            <section className="container">
                <div className={Styles.feedbackHeader}>
                    <div className={Styles.feedbackHeaderLeft}>
                        <div className={Styles.headerLeftImage}>

                        </div>
                        <div className="sectionHeading"></div>
                        <div className="sectionHeading"></div>
                        <div className="localStylesheaderLeftContent"></div>
                    </div>
                    <div className={Styles.feedbackHeaderRight}>

                    </div>
                </div>
            </section>

            <section className="container">
                <div className="section">
                <div className="sectionHeading">
                    this
                </div>
                </div>
                    <FeedbackElement/>
            </section>
    </>);
}