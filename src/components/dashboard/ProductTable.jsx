import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";
import Loader from "../../layouts/loader/Loader";
import { useNavigate } from "react-router-dom"; // useNavigate is a hook
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../actions/products";
import CreateForm from "../../views/ui/CreateForm";

function ProductTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.Products);
  const handleDelete = (e, id) => {
    e.preventDefault(); // prevent page reload
    console.log(id);
    dispatch(deleteProduct(id, navigate)); // call deleteProduct action
  };
  const handleCreateButton = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/createForm");
  };
  const handleEditButton = (e, id) => {
    e.preventDefault(); // prevent page reload
    navigate("/editForm/" + id);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>Product Listing</CardTitle>
          <Button
            onClick={(e) => {
              handleCreateButton(e);
            }}
          >
            CREATE
          </Button>
          <CardSubtitle className='mb-2 text-muted' tag='h6'></CardSubtitle>

          <Table className='no-wrap mt-3 align-middle' responsive borderless>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Updated Date</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className='border-top'>
                  <td>{index + 1}</td>
                  <td>
                    <h6 className='mb-0'>{product.title}</h6>
                  </td>
                  <td>{product.updatedAt.split("T")[0]}</td>
                  <td>
                    <Button onClick={(e) => handleDelete(e, product._id)}>
                      DELETE
                    </Button>
                  </td>

                  <td>
                    <Button
                      color='warning'
                      onClick={(e) => {
                        handleEditButton(e, product._id);
                      }}
                    >
                      EDIT
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductTable;
