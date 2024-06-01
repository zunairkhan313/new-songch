// // pages/cart.js
// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';
// import { authOptions } from '../api/auth/[...nextauth]/route';
// import Checkout from '../Components/OrderPage';



// export default async function Order() {
//   const session = await getServerSession(authOptions);
//   if (!session) redirect('/login');

//   return (
//     <Checkout />
//   );
// }
import Checkout from '../Components/OrderPage';
import { fetchAddress } from '../../lib/fetchAddress';


export default async function Order() {
  const addressData = await fetchAddress();

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <Checkout addressData={addressData} />
    </>
  )
}
