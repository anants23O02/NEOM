import React, { useState } from "react";
import styles from "../../styles/scheduleModal.module.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { ConvertDate } from "../../utils/DateValue";
import { CiCalendar } from "react-icons/ci";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: number;
  userId: number;
}

const MyModal: React.FC = ({ isOpen, onClose, event, userId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const startDate = ConvertDate(event.start_date);
  const endDate = ConvertDate(event.end_date);

  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.log("Stripe or Elements not loaded");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.log("CardElement is not available");
      return;
    }

    try {
      const res = await fetch("/payment/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: event.id, user: userId }),
      });

      const { clientSecret } = await res.json();
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        console.log("Payment successful!", result.paymentIntent);
        closePaymentModal();
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={styles.modalTimeRange}>
            {" "}
            {`${startDate[3]}:${startDate[4]} ${startDate[5]} - ${endDate[3]}:${endDate[4]} ${endDate[5]}`}{" "}
          </h2>

          <div className={styles.modalDates}>
            <div className={styles.dateField}>
              <label>From</label>
              <div>
                <CiCalendar
                  style={{
                    paddingRight: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    // marginTop:"2px"
                  }}
                />
                {`${startDate[2]} ${startDate[1]} ${startDate[0]}`}
              </div>
            </div>
            <div className={styles.dateField}>
              <label>To</label>
              <div>
                <CiCalendar
                  style={{
                    paddingRight: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                />
                {`${endDate[2]} ${endDate[1]} ${endDate[0]}`}
              </div>
            </div>
          </div>

          <div className={styles.modalGuests}>
            <label>Guests</label>
            <select defaultValue="1 adult">
              <option>1 adult</option>
              <option>2 adults</option>
              <option>3 adults</option>
            </select>
          </div>

          <div className={styles.eventInformation}>
            <div className={styles.seats}>
              <div>Seats Available</div>
              <p className={styles.modalSeats}>{`${event.seats}`}</p>
            </div>

            <div className={styles.cost}>
              <div>Cost</div>
              <p className={styles.modalSeats}>{`$${event.seats}`}</p>
            </div>
          </div>

          <button
            onClick={openPaymentModal}
            className={styles.modalReserveButton}
          >
            Reserve my seats
          </button>
        </div>
        <p className={styles.modalHelp}>Need help?</p>
      </div>

      {showPaymentModal && (
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
                placeholder="John Doe"
                className={styles.inputField}
                required
              />

              <label className={styles.label}>Card Details</label>
              <div className={styles.cardInputContainer}>
                <CardElement
                  options={{ hidePostalCode: true }}
                  className={styles.cardElement}
                />
              </div>

              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className={styles.inputField}
                required
              />

              <button
                type="submit"
                onClick={handlePayment}
                className={styles.modalPayButton}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyModal;
