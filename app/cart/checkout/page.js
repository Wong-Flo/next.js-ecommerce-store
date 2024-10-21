export const metadata = {
  title: 'Checkout',
  description: 'Generated by create next app',
};
export default function CartPage() {
  return (
    <>
      <div className="xLarge">
        <h1>Checkout Page</h1>
      </div>
      <div className="checkout-form">
        <h2>Checkout Form</h2>
        <form>
          <label>
            First name:
            <input type="text" required />
            <br />
            Last name:
            <input type="text" required />
            <br />
            Delivery Address:
            <input type="text" required />
            <br />
            Postal Code:
            <input type="text" required />
            <br />
            Country:
            <input type="text" required />
            <br />
            Payment Methods:
            <input type="text" required />
          </label>
        </form>

        <button>Submit</button>
      </div>
    </>
  );
}
