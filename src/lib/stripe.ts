import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  //@ts-ignore
  apiVersion: "2024-09-30.acacia",
  typescript: true,
})
//
export const createCheckoutSession = async ({
  userEmail,
  userId,
}: {
  userEmail: string
  userId: string
}) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1R5WqK06QzhPJiUJygJL9hii",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,

    customer_email: userEmail,
    metadata: {
      userId,
    },
  })

  return session
}
