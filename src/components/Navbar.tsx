import { Button } from '@mui/material';
import Box from '@mui/material/Box';
const Navbar = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px', 
          padding: '4px',
          margin:'20px',
          top:'50px',
          position:'fixed'
        }}
      >
        <input
          type="text"
          placeholder="Search Here"
          style={{
            width: '300px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <Button
          variant="outlined"
          disableRipple
          disableElevation
          style={{
            // textTransform: 'none',
            padding: '6px 16px',
            backgroundColor: '#1976d2',
            color: '#fff',
            
          }}
        >
          Button 
        </Button>
      </Box>
    )
  }
  
  export default Navbar