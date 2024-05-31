import Image from "next/image";
import slide1 from "../../public/Images/slide1.jpg";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import card1 from "../../public/Images/card1.png";
import card2 from "../../public/Images/card2.png";
import card3 from "../../public/Images/card3.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "../Components/hr.css";
import { useSelector } from "react-redux";
import ProductCardCart from "../Components/products/productCardCart";

export default async function Cart() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <>
      <style>{`
                body {
                    background-color: white;
                }
            `}</style>
      <div className="container mt-5">
        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
          <h1 className="heading text-black font-bold">Cart</h1>
        </div>
        <div className="hr-cart"></div>

        <Row>
          <Col sm={12} md={7}>
            <div className="container mt-5">
              <div className="flex flex-wrap">
                <ProductCardCart />
              </div>
            </div>
          </Col>

          {/* price side */}

          <Col md={5}>
            <div className="container mt-5">
              <div className="flex flex-wrap">
                {/* toodo list */}
                <div
                  style={{ height: "100%", width: 600 }}
                  className="mt-2 shadow p-3 bg-body-white rounded"
                >
                  <div>
                    <h3 className="text-3xl text-center font-sans font-bold">
                      Card Details
                    </h3>
                    <br />
                    <hr />
                    <div className="flex flex-wrap justify-around gap-2">
                      <div>
                        <Image
                          className="img-fluid mt-3"
                          width={80}
                          src={card1}
                          alt={"card"}
                        />
                      </div>
                      <div>
                        <Image
                          className="img-fluid"
                          width={80}
                          src={card2}
                          alt={"card"}
                        />
                      </div>
                      <div>
                        <Image
                          className="img-fluid mt-2"
                          width={100}
                          src={card3}
                          alt={"card"}
                        />
                      </div>
                    </div>
                    <hr />
                    <br />
                    <h6 className="font-sans font-bold">
                      Shipping information
                    </h6>
                    <br />
                    <p>Email</p>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-[100%] border border-gray-200 py-2 px-6 rounded"
                    />
                    <br />
                    <br />
                    <p>Shipping Address</p>
                    <input
                      className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                      type="text"
                      placeholder="Country"
                    />
                    <input
                      className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                      type="text"
                      placeholder="Address"
                    />
                    <br />
                    <br />
                    <div className="flex flex-wrap justify-between p-2">
                      <div>
                        <h5 className="font-sans text-lg font-bold">
                          Subtotal
                        </h5>
                      </div>
                      <div>
                        <h6 className="font-sans text-lg font-bold">$4589</h6>
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
                        <h6 className="font-sans text-lg font-bold">$4589</h6>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-wrap justify-between p-2">
                      <div>
                        <h5 className="font-sans text-lg font-bold">Total</h5>
                      </div>
                      <div>
                        <h6 className="font-sans text-lg font-bold">$4589</h6>
                      </div>
                    </div>
                    <hr />

                    <div class="container px-10 mx-0 min-w-full flex flex-col items-center">
                      <Link href={"./order"}>
                        <button class="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* end */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
