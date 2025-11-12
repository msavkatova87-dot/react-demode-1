import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import instance from "../axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Create2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function handleCreate(product) {
    await instance.post("/product2", product);
  }

  const mutation = useMutation({
    mutationFn: handleCreate,
    onSuccess: () => {
      alert("✅ Product created successfully!");
      navigate("/products2");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950 px-4">
      <Card className="w-full max-w-md bg-gray-900 text-white shadow-2xl rounded-3xl p-8 ">
        <Typography
          variant="h3"
          color="white"
          className="text-center font-extrabold tracking-wide mb-8"
        >
          🛒 Create Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Image URL */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Image URL</Typography>
            <Input
              {...register("img")}
              size="lg"
              placeholder="https://example.com/image.jpg"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Title</Typography>
            <Input
              {...register("title")}
              size="lg"
              placeholder="Product Title"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Description</Typography>
            <Input
              {...register("desc")}
              size="lg"
              placeholder="Enter product description..."
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-300 font-semibold">Price ($)</Typography>
            <Input
              {...register("price")}
              size="lg"
              placeholder="99.99"
              type="number"
              className="bg-gray-800 text-white placeholder-gray-400 focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500 rounded-lg"
            />
          </div>

          {/* Featured Checkbox */}
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
            {mutation.isLoading ? <Spinner className="h-5 w-5 text-white mx-auto" /> : "Create Product"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Create2;
