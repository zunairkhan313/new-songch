// "use client"
// import Image from "next/image";
// import slide1 from "../../public/Images/slide1.jpg";
// import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import card1 from "../../public/Images/card1.png";
// import card2 from "../../public/Images/card2.png";
// import card3 from "../../public/Images/card3.png";
// import Link from "next/link";
// import "../Components/hr.css";
// import ProductCardCheckout from "./products/productCardCheckout";
// import { useState, useEffect } from 'react';
// import { db } from '../firebase/Firebase'
// import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'


// export default async function Checkout() {

//     const [addAddress, setAddAddress] = useState([]);

//     const moviesCollectionRef = collection(db, "Card");

//     const getAddress = async () => {
//         try {
//             const data = await getDocs(moviesCollectionRef);
//             const filteredData = data.docs.map((doc) => ({
//                 ...doc.data(),
//                 id: doc.id
//             }));
//             setAddAddress(filteredData);
//             console.log(addAddress);
//         } catch (err) {
//             console.error(err)
//         }
//     };
//     useEffect(() => {
//         getAddress();
//     }, [])

//     return (
//         <>
//             <style>{`
//                 body {
//                     background-color: white;
//                 }
//             `}</style>
//             <div className="container mt-5">
//                 <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
//                     <h1 className="heading text-black font-bold">Pay</h1>
//                 </div>
//                 <div className="hr-cart"></div>

//                 <Row>
//                     <Col sm={12} md={7}>
//                         <div className="container mt-5">
//                             <div className="flex flex-wrap">
//                                 <ProductCardCheckout />
//                             </div>
//                         </div>
//                     </Col>

//                     {/* price side */}

//                     <Col md={5}>
//                         <div className="container mt-5">
//                             <div className="flex flex-wrap">
//                                 {/* toodo list */}
//                                 <div
//                                     style={{ height: "100%", width: 600 }}
//                                     className="mt-2 shadow p-3 bg-body-white rounded"
//                                 >
//                                     <div>
//                                         <h3 className="text-3xl text-center font-sans font-bold">
//                                             Order Place
//                                         </h3>
//                                         <br />
//                                         <hr />
//                                         <div className="flex flex-wrap justify-around gap-2">
//                                             <div>
//                                                 <Image
//                                                     className="img-fluid mt-3"
//                                                     width={80}
//                                                     src={card1}
//                                                     alt={"card"}
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <Image
//                                                     className="img-fluid"
//                                                     width={80}
//                                                     src={card2}
//                                                     alt={"card"}
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <Image
//                                                     className="img-fluid mt-2"
//                                                     width={100}
//                                                     src={card3}
//                                                     alt={"card"}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <hr />
//                                         <br />
//                                         <h6 className="font-sans font-bold">
//                                             Shipping information
//                                         </h6>
//                                         <br />
//                                         {addAddress.map((card) => (
//                                             <>

//                                                 <p>Email : {card.Email}</p>

//                                                 <br />

//                                                 <h6 className="font-sans font-bold">Shipping Address</h6><br />
//                                                 <p>Name : {card.Name}</p>
//                                                 <br />
//                                                 <p>Country : {card.Country}</p>
//                                                 <br />
//                                                 <p>Address : {card.Address}</p>
//                                             </>
//                                         ))}
//                                         <br />
//                                         <br />
//                                         <div className="flex flex-wrap justify-between p-2">
//                                             <div>
//                                                 <h5 className="font-sans text-lg font-bold">
//                                                     Subtotal
//                                                 </h5>
//                                             </div>
//                                             <div>
//                                                 <h6 className="font-sans text-lg font-bold">$4589</h6>
//                                             </div>
//                                         </div>
//                                         <hr />
//                                         <div className="flex flex-wrap justify-between p-2">
//                                             <div>
//                                                 <h5 className="font-sans text-lg font-bold">
//                                                     Delivery Charges
//                                                 </h5>
//                                             </div>
//                                             <div>
//                                                 <h6 className="font-sans text-lg font-bold">$4589</h6>
//                                             </div>
//                                         </div>
//                                         <hr />
//                                         <div className="flex flex-wrap justify-between p-2">
//                                             <div>
//                                                 <h5 className="font-sans text-lg font-bold">Total</h5>
//                                             </div>
//                                             <div>
//                                                 <h6 className="font-sans text-lg font-bold">$4589</h6>
//                                             </div>
//                                         </div>
//                                         <hr />

//                                         <div class="container px-10 mx-0 min-w-full flex flex-col items-center">

//                                             <button class="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded">
//                                                 Order Place
//                                             </button>

//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* end */}
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </div>
//         </>
//     );
// }


'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';
import card1 from '../../public/Images/card1.png';
import card2 from '../../public/Images/card2.png';
import card3 from '../../public/Images/card3.png';
import ProductCardCheckout from './products/ProductCardCheckout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function OrderPage({ addressData }) {


  const onSubmitOrder = () => {
    
    alert('Order placed successfully!');
  
  };

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <div className="container mt-5">
        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText">
          <h1 className="heading text-black font-bold">Pay</h1>
        </div>
        <div className="hr-cart"></div>

        <Row>
          <Col sm={12} md={7}>
            <div className="container mt-5">
              <div className="flex flex-wrap">
                <ProductCardCheckout />
              </div>
            </div>
          </Col>

          <Col md={5}>
            <div className="container mt-5">
              <div className="flex flex-wrap">
                <div
                  style={{ height: '100%', width: 600 }}
                  className="mt-2 shadow p-3 bg-body-white rounded"
                >
                  <div>
                    <h3 className="text-3xl text-center font-sans font-bold">
                      Order Place
                    </h3>
                    <br />
                    <hr />
                    <div className="flex flex-wrap justify-around gap-2">
                      <div>
                        <Image
                          className="img-fluid mt-3"
                          width={80}
                          src={card1}
                          alt="card"
                        />
                      </div>
                      <div>
                        <Image
                          className="img-fluid"
                          width={80}
                          src={card2}
                          alt="card"
                        />
                      </div>
                      <div>
                        <Image
                          className="img-fluid mt-2"
                          width={100}
                          src={card3}
                          alt="card"
                        />
                      </div>
                    </div>
                    <hr />
                    <br />
                    <h6 className="font-sans font-bold">Shipping information</h6>
                    <br />
                    {addressData.map(card => (
                      <div key={card.id}>
                        <p>Email : {card.Email}</p>
                        <br />
                        <h6 className="font-sans font-bold">Shipping Address</h6>
                        <br />
                        <p>Name : {card.Name}</p>
                        <br />
                        <p>Country : {card.Country}</p>
                        <br />
                        <p>Address : {card.Address}</p>
                        <br />
                      </div>
                    ))}
                    <br />
                    <div className="flex flex-wrap justify-between p-2">
                      <div>
                        <h5 className="font-sans text-lg font-bold">Subtotal</h5>
                      </div>
                      <div>
                        <h6 className="font-sans text-lg font-bold">$0.00</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-wrap justify-between p-2">
                      <div>
                        <h5 className="font-sans text-lg font-bold">
                          Delivery Charges
                        </h5>
                      </div>
                      <div>
                        <h6 className="font-sans text-lg font-bold">$0.00</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-wrap justify-between p-2">
                      <div>
                        <h5 className="font-sans text-lg font-bold">Total</h5>
                      </div>
                      <div>
                        <h6 className="font-sans text-lg font-bold">$0.00</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
                      <button
                        onClick={onSubmitOrder}
                        className="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded"
                      >
                        Order Place
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

OrderPage.propTypes = {
  addressData: PropTypes.arrayOf(
    PropTypes.shape({
      Email: PropTypes.string,
      Name: PropTypes.string,
      Country: PropTypes.string,
      Address: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default OrderPage;
