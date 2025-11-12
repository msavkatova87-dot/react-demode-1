import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import instance from "../axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Update2 = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch product by ID
  const { isLoading, error, data } = useQuery({
    queryKey: ["getProduct2Id", id],
    queryFn: async () => {
      const res = await instance.get(`/product2/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      reset(data); // fill form with fetched data
    },
  });

  // Update mutation
  const mutation = useMutation({
    mutationFn: async (product) => {
      await instance.put(`/product2/${id}`, product);
    },
    onSuccess: () => {
      alert("✅ Product updated successfully!");
      navigate("/products2");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <Spinner className="h-12 w-12 text-white" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <Typography className="text-red-500">{error.message}</Typography>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950 px-4">
      <Card className="w-full max-w-md bg-gray-900 text-white shadow-2xl rounded-3xl p-8">
        <Typography
          variant="h3"
          color="white"
          className="text-center font-extrabold tracking-wide mb-8"
        >
          ✏️ Update Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Image URL */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Image URL</Typography>
            <Input
              {...register("img")}
              size="lg"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Title</Typography>
            <Input
              {...register("title")}
              size="lg"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Description</Typography>
            <Input
              {...register("desc")}
              size="lg"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Price ($)</Typography>
            <Input
              {...register("price")}
              size="lg"
              type="number"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Featured Product Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox {...register("featured")} className="accent-blue-500" />
            <Typography className="text-gray-300 font-medium">Featured Product</Typography>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-gray-800 hover:from-blue-800 hover:to-gray-900 text-white font-bold rounded-lg shadow-lg mt-4"
            fullWidth
          >
            {mutation.isLoading ? (
              <Spinner className="h-5 w-5 text-white mx-auto" />
            ) : (
              "Update Product"
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Update2;
