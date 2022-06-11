import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";

const UserTable = () => {
  const users = useSelector((state) => state.Auth.users);
  console.log(users);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>User Listing</CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'></CardSubtitle>

          <Table className='no-wrap mt-3 align-middle' responsive borderless>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index} className='border-top'>
                  <td>{index + 1}</td>
                  <td>
                    <h6 className='mb-0'>{user.name}</h6>
                  </td>
                  <td>{user.createdAt.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserTable;
