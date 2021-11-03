import React from 'react';
// import stripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // const priceForStripe = price * 100;
    // const publishKey = 'asdasd',
    //     onToken = token => {
    //         console.log(token);
    //         alert('Payment Successful')
    //     }

    return (
        <input type="button" value="Pay Now"/>
        // <stripeCheckout
        //     label='Pay Now'
        //     name='CRWN Clothing Ltd.'
        //     billingAddress
        //     shippingAddress
        //     image='https://svgshare.com/i/CUz.svg'
        //     description={`Your total is $${priceForStripe}`}
        //     panleLabel='Pay Now'
        //     token={onToken}
        //     stripeKey={publishKey}
        // />
    )
}

export default StripeCheckoutButton;