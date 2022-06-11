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
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
  const products = useSelector((state) => state.Products);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>Product Listing</CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'></CardSubtitle>

          <Table className='no-wrap mt-3 align-middle' responsive borderless>
            <thead>
              <tr>
                <th>Title</th>
                <th>Updated Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className='border-top'>
                  <td>
                    <h6 className='mb-0'>{tdata.name}</h6>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    <Button>DELETE</Button>
                  </td>

                  <td>
                    <Button color='warning'>EDIT</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
