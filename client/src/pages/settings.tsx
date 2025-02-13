import styles1 from "../styles/dashboard.module.css";
import styles2 from "../styles/settings.module.css";
import { Navbar } from "../components/Navbar/Navbar";
import { settingsData } from "../assets/Dummydata/settingsData";
import { ToggleButton } from "../utils/toggleButton";
import { RadioButton } from "../utils/RadioButton";

export const Settings: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles2.heading}>
          <div className={styles1.scheduledSection}>
            <div className={styles1.scheduledHeading}>Good Morning Charlie</div>
            <div className={styles1.scheduledContent}>
              You can change the settings for your personal data and other
              information.
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles2.heading}>
          {settingsData.map((setting, i) => {
            return (
              <div key={i} className={styles2.settingsSection}>
                <div className={styles2.settings}>
                  <div className={styles2.settingsContent}>
                    <div className={styles2.settingsHeading}>
                      {setting.heading}
                    </div>
                    <div className={styles2.settingsDescription}>
                      {setting.description}
                    </div>
                  </div>
                  <div className={styles2.settingsButton}>
                    {
                      // Optional button to be placed
                      setting.buttonType === "HeadingButtonToggleSwitch" && (
                        <ToggleButton />
                      )
                    }
                  </div>
                </div>

                {/* Rendering options */}
                {setting.options.length !== 0 && (
                  <div className={styles2.options}>
                    {setting.buttonType === "OptionButtonRadioButton" ? (
                      <div className={styles2.optionRadioButton}>
                        <RadioButton options={setting.options} />
                      </div>
                    ) : (
                      setting.options.map((value: string, index: number) => (
                        <div key={index}>
                          <div className={styles2.optionToggleSwitch}>
                            <ToggleButton />
                          </div>
                          <div className={styles2.option}>{value}</div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
