import { Pagination } from "@mui/material";
import { PaginationContainer } from "./styles";

const CPagination = ({ setCurrentPage = () => {}, ...props }) => {
  return (
    <PaginationContainer>
      <Pagination
        color="primary"
        onChange={(e, val) => setCurrentPage(val)}
        {...props}
      />
    </PaginationContainer>
  );
};

export default CPagination;
