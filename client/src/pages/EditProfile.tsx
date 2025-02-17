import {Navbar} from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer/Footer";
import {activities} from "../utils/ActivityImages"
export const EditProfile:React.FC = () => {
    return (
        <> 
        <Navbar/>
        <section className="container">
        <div className="stylesProfileSection">
            <div className="stylesprofileHeading">

            </div>
            <div className="stylesprofileForm">
                <div className="stylesprofilePicture">

                </div>
                <div className="stylesform">


                </div>
                    <div className="stylesformImages">
                        {
                            activities.map((image,i) => {
                                return <img src={image} alt="" />
                            })
                        }
                    </div>
                    
            </div>
        </div>
        </section>
        <Footer/>
        </>
    )
}