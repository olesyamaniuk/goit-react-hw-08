import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <Card variant="outlined" sx={{ maxWidth: 600 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <p>
            {contact.name}
          </p>
          <p>
            {contact.number}
          </p>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{ mt: 1, mb: 1 }}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <DeleteIcon />
              </Button>
     
        </Box>
      </Box>
    </Card>
  );
}