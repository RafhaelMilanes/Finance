// "use client";

// import { Button } from "@/app/_components/ui/button";
// import { createStripeCheckout } from "../_actions/create-stripe-checkout";
// import { loadStripe } from "@stripe/stripe-js";

// const AcquirePlanButton = () => {
//   const handlePlanCLick = async () => {
//     const { sessionId } = await createStripeCheckout();
//     const stripe = await loadStripe(
//       process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
//     );

//     await stripe?.redirectToCheckout({ sessionId });
//   };

//   return (
//     <Button className="w-full rounded-xl font-bold" onClick={handlePlanCLick}>
//       Adiquirir plano
//     </Button>
//   );
// };

// export default AcquirePlanButton;
