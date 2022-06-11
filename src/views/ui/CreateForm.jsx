import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../../actions/products";
import { fetchProduct } from "../../api/index";
const product = { title: "", desc: "", price: "", image: "" };

const CreateForm = ({ isAdd }) => {
  const params = useParams();

  //console.log(isAdd);
  const dispatch = useDispatch();
  const fd = new FormData();
  const appendData = () => {
    fd.append("title", formData.title);
    fd.append("desc", formData.desc);
    fd.append("price", formData.price);
    if (formData.image) {
      fd.append("productImage", formData.image);
    }
  };
  const [formData, setFormData] = useState(product);
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id)
        .then((res) => {
          setFormData({
            title: res.data.title,
            desc: res.data.desc,
            price: res.data.price,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    appendData();
    {
      isAdd
        ? dispatch(createProduct(fd))
        : dispatch(updateProduct(params.id, fd));
    }

    window.location.href = "/products";
  };
  // const handleEditSubmit = (e) => {
  //   e.preventDefault();
  //   appendData();
  //   dispatch(updateProduct(params.id, fd));
  //   navigate("/products");
  // };
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag='h6' className='border-bottom p-3 mb-0'>
            {isAdd ? "Add Product" : "Edit Product"}
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for='exampleEmail'>
                  {isAdd ? "Title" : "Edit Title"}
                </Label>
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                  }}
                  id='exampleEmail'
                  name='email'
                  value={formData.title}
                  placeholder='Enter Title'
                  type='email'
                />
              </FormGroup>
              <FormGroup>
                <Label for='example'>
                  {isAdd ? "Description" : "Edit Description"}
                </Label>
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, desc: e.target.value });
                  }}
                  name='description'
                  placeholder='Enter Description'
                  type='textarea'
                  value={formData.desc}
                />
              </FormGroup>
              <FormGroup>
                <Label for='example'>{isAdd ? "Price" : "Edit Price"}</Label>
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, price: e.target.value });
                  }}
                  name='price'
                  placeholder='Enter Price'
                  type='number'
                  value={formData.price}
                />
              </FormGroup>
              <FormGroup>
                <Label for='example'>
                  Add Image
                  {/* {isAdd ? "Image" : "Edit Image"} */}
                </Label>
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, image: e.target.files[0] });
                  }}
                  name='image'
                  type='file'
                  value={formData.productImage}
                />
              </FormGroup>
              {isAdd ? (
                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Edit
                </Button>
              )}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateForm;
