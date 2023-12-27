import greenCapsicum from "../Images/greenCapsicum.png";
import greenChilli from "../Images/greenChilli.png";
import redCapsicum from "../Images/redCapsicum.png";

const ProductsOrdered = () => {
  const items = [
    {
      img: redCapsicum,
      product: "Red Capsicum",
      price: "$24.00",
      quantity: "x5",
      subtotal: "$70.00",
    },
    {
      img: greenCapsicum,
      product: "Green Capsicum",
      price: "$15.00",
      quantity: "x2",
      subtotal: "$70.00",
    },
    {
      img: greenChilli,
      product: "Green Chilli",
      price: "$25.00",
      quantity: "x5",
      subtotal: "$10.00",
    },
  ];
  return (
    <div className="font-poppins overflow-x-scroll md:overflow-hidden">
      <div className="">
        <table className="w-[100%] mt-10 items-center">
          <thead className="bg-[#F2F2F2] text-xs font-medium ">
            <tr className="flex items-center justify-evenly">
              <th className="p-2">PRODUCT</th>
              <th className="">PRICE</th>
              <th className="">QUANTITY</th>
              <th className="">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody className=" border-2 ">
            {items.map((item, id) => (
              <tr key={id} className="items-start">
                <div className="flex items-start justify-evenly border-b-2">
                  <div className="items-center md:flex md:w-[30%] md:-ml-24">
                    <td>
                      <img src={item.img} />
                    </td>
                    <td>{item.product}</td>
                  </div>
                  <div className="flex items-start mt-6 md:-ml-28">
                    <td className="">{item.price}</td>
                  </div>
                  <div className="flex items-start mt-6">
                    <td>{item.quantity}</td>
                  </div>
                  <div className="flex items-start mt-6">
                    <td>{item.subtotal}</td>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsOrdered;
