import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import MessageIcon from '@mui/icons-material/Message';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import TableChartIcon from '@mui/icons-material/TableChart';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
  return (
    <div className="absolute w-full px-5">
      <footer className="flex justify-between">
        <Stack spacing={1} direction="row">
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <FilterListIcon />
          </IconButton>
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <TableChartIcon />
          </IconButton>
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <SortByAlphaIcon />
          </IconButton>
        </Stack>

        <Stack spacing={1} direction="row">
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <MessageIcon />
          </IconButton>
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <DraftsIcon />
          </IconButton>
          <IconButton
            size="small"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <LocalPhoneIcon />
          </IconButton>
        </Stack>
      </footer>
    </div>
  );
};

export default Footer;
