import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams(); // Extract the ID from the route

  return (
    <div>
      <h1>Details Page</h1>
      <p>You clicked on card with ID: {id}</p>
      {/* You can fetch or display more details for this specific ID */}
    </div>
  );
};

export default DetailsPage;
