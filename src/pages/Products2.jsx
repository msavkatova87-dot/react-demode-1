import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import instance from "../axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Spinner,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Products2 = () => {
  const queryClient = useQueryClient();

  async function handleGet() {
    const response = await instance.get("/product2");
    return response.data;
  }

  async function handleDelete(id) {
    await instance.delete(`/product2/${id}`);
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["getProducts2"],
    queryFn: handleGet,
  });

  const mutation = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      alert("🗑️ Product deleted successfully!");
      queryClient.invalidateQueries(["getProducts2"]);
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <Spinner className="h-12 w-12 text-white" />
      </div>
    );

  if (error)
    return (
      <h1 className="text-center text-red-500 text-2xl mt-10">
        {error.message}
      </h1>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 px-10 py-14">
      <Typography
        variant="h2"
        color="white"
        className="text-center mb-12 font-bold tracking-widest uppercase"
      >
        👟 Our Shoes Collection
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {data.map((product) => (
          <Card
            key={product.id}
            className="w-80 bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-gray-600/30"
          >
            {/* Product image */}
            <CardHeader shadow={false} floated={false} className="h-80 relative">
              <img
                src={product.img}
                alt={product.title}
                className="h-full w-full object-cover rounded-t-2xl transition-all duration-300 hover:opacity-90"
              />
              <span className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-700">
                NEW
              </span>
            </CardHeader>

            {/* Product info */}
            <CardBody className="p-5">
              <div className="flex items-center justify-between mb-3">
                <Typography
                  color="white"
                  className="font-semibold text-lg tracking-wide"
                >
                  {product.title}
                </Typography>
                <Typography
                  color="white"
                  className="font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                  ${product.price}
                </Typography>
              </div>

              <Typography
                variant="small"
                color="gray"
                className="font-light text-sm opacity-80 leading-relaxed"
              >
                {product.desc}
              </Typography>
            </CardBody>

            {/* Buttons */}
            <CardFooter className="pt-0 flex flex-col gap-3 px-5 pb-5">
              <Button
                ripple={true}
                fullWidth={true}
                className="bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold tracking-wide rounded-lg shadow-md hover:shadow-white/10 transition-all duration-200"
              >
                Buy Now
              </Button>

              <div className="flex gap-3">
                <Link to={`/update2/${product.id}`} className="w-1/2">
                  <Button
                    ripple={true}
                    fullWidth={true}
                    className="bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold tracking-wide rounded-lg shadow-md hover:shadow-white/10 transition-all duration-200"
                  >
                    Edit
                  </Button>
                </Link>

                <Button
                  onClick={() => mutation.mutate(product.id)}
                  ripple={true}
                  fullWidth={true}
                  className="bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold tracking-wide rounded-lg shadow-md hover:shadow-red-500/30 transition-all duration-200"
                >
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 text-center border-t border-gray-800 pt-6">
        <Typography variant="small" color="gray" className="opacity-70">
          © 2025 <span className="text-white font-semibold">ZEGNA</span>. Step
          into the Future with Style.
        </Typography>
      </div>
    </div>
  );
};

export default Products2;
