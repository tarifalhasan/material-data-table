import { TextField } from '@mui/material';
const ContactPerson = () => {
  return (
    <div className="space-y-3">
      <TextField
        id="standard-basic"
        className="w-full"
        label="Name*"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        className="w-full"
        label="Email*"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        className="w-full"
        label="Subject*"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        className="w-full"
        label="Message*"
        variant="standard"
      />
    </div>
  );
};

export default ContactPerson;
