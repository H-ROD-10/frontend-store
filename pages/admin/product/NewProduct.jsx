import React, { useState } from "react";
import axios from "../../../helpers/Axios";
import { Form, Label, Input } from "../../../components/form";
import { BtnAction } from "../../../components/buttons/Btn";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { newProductValidation } from "../../../rules/newProduct.validation";
import { useMutation } from "react-query";

const NewProduct = () => {
  const INITIAL_STATE = {
    name: "",
    brand: "",
    description: "",
    price: 0,
    stock: 0,
  };

  const [images, setImages] = useState([]);
  const [imagesPrev, setImagesPrev] = useState([]);

  const { data, saveData, errors, handleChange, handleBlur, handleSubmit } =
    useFormValidation(INITIAL_STATE, newProductValidation, createProduct);

  const { name, price, stock, description, brand } = data;

  const mutation = useMutation(
    async (productData) =>
      await axios.post("/api/v1/admin/product/new", productData)
  );

  function createProduct() {
    const pictures = images.forEach((image) => {
      return image;
    });

    mutation.mutate({ name, price, description, stock, brand, pictures });
  }

  const handleChangeUpload = (e) => {
    const files = Array.from(e.target.files);

    setImagesPrev([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPrev((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl">Nuevo Producto</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && (
            <p className="text-red-800 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <Label>Marca</Label>
          <Input
            type="text"
            name="brand"
            value={brand}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brand && (
            <p className="text-red-800 text-xs mt-1">{errors.brand}</p>
          )}
        </div>
        <div>
          <Label>Descripción</Label>
          <Input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && (
            <p className="text-red-800 text-xs mt-1">{errors.description}</p>
          )}
        </div>
        <div>
          <Label>Precio</Label>
          <Input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && (
            <p className="text-red-800 text-xs mt-1">{errors.price}</p>
          )}
        </div>
        <div>
          <Label>Stock</Label>
          <Input
            type="number"
            name="stock"
            value={stock}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.stock && (
            <p className="text-red-800 text-xs mt-1">{errors.stock}</p>
          )}
        </div>
        <div className="mt-4">
          <div className="mt-8">
            <input
              type="file"
              multiple
              name="images"
              onChange={handleChangeUpload}
              accept="images/*"
            />
          </div>
          <div>
            {imagesPrev.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="product"
                style={{
                  width: "55px",
                  height: "50px",
                  objectFit: "containt",
                }}
              />
            ))}
          </div>
        </div>
        <BtnAction>
          {mutation.isLoading ? "Cargando..." : "Guardar Producto"}
        </BtnAction>
      </Form>
    </div>
  );
};

export default NewProduct;
