import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { addEventSchedule } from "../../store/userSlice";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import ClipLoader from "react-spinners/ClipLoader"; // Import loader
import styles from "../../styles/scheduleModal.module.css";

export const PaymentModal: React.FC = ({
  event,
  userId,
  guests,
  setShowPaymentModal,
  minDate,
  maxDate,
}) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(minDate);
  const [loading, setLoading] = useState(false);

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.log("Stripe or Elements not loaded");
      return;
    }

    setLoading(true); // Show loader

    try {
      const res = await fetch("/payment/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      });

      const { clientSecret } = await res.json();
      const result = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        console.log("Payment successful!", result.paymentIntent);
        try {
          const confirm = await fetch("/api/addEvent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              event: event.id,
              user: userId,
              date,
              guests,
              cost: event.cost,
            }),
          });
          dispatch(addEventSchedule({ event_id: event.id, event_date: date }));
          closePaymentModal();
        } catch (error) {
          console.log("error :>> ", error);
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.paymentOverlay}>
      <div className={styles.paymentContainer}>
        <button className={styles.closeButton} onClick={closePaymentModal}>
          ✖
        </button>
        <h2 className={styles.paymentTitle}>Enter Payment Details</h2>

        <form onSubmit={handlePayment} className={styles.paymentForm}>
          <label className={styles.label}>Cardholder Name</label>
          <input
            type="text"
            placeholder="Full  Name"
            className={styles.inputField}
            required
          />

          <label className={styles.label}>Payment Details</label>
          <div className={styles.paymentElementContainer}>
            <PaymentElement
              options={{ layout: "tabs" }}
              className={styles.paymentElement}
            />
          </div>

          <label className={styles.label}>Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            className={styles.inputField}
            required
          />

          <div className={styles.phoneInputContainer}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              inputProps={{ name: "phone", required: true, autoFocus: true }}
              inputClass={styles.phoneInput}
            />
          </div>

          <div className={styles.information}>
            <div className={styles.informationform}>
              <label className={styles.label}>Select Date</label>
              <input
                type="date"
                className={styles.inputField}
                
                value={date}
                onChange={(e) => {
                  const selectedDate = e.target.value;
              
                    setDate(selectedDate);
                  
                }}
                required
              />
            </div>
            <div className={styles.informationform}>
              <label className={styles.label}>Guests</label>
              <input
                type="text"
                className={styles.inputField}
                value={guests}
                readOnly
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.modalPayButton}
            disabled={loading}
          >
            {loading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              `Pay $${event.cost * guests}`
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
