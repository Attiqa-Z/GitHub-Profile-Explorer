import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import CustomTextField from 'src/@core/components/mui/text-field'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { Checkbox, DialogContent, FormControlLabel } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { MenuItem } from '@mui/material'
import { ApiToken } from 'src/utils/constants/functions/getapitoken'
import Swal from 'sweetalert2'
import { CircularProgress } from '@mui/material'
import { LoggedInUser } from 'src/utils/constants/functions/getloggedinuser'
import { useRouter } from 'next/router'
import { Tooltip } from '@mui/material'

import { baseUrl_scl } from 'src/utils/constants/baseurl'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useAuth } from 'src/hooks/useAuth'
import CloseIcon from '@mui/icons-material/Close';


const ExamTypes = () => {

  let logedInUser = LoggedInUser()
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:768px)'); 
  const { logout } = useAuth()

  const [searchvalue, setSearchvalue] = useState('')
  const [searchkey, setSearchkey] = useState('All')
  const [perPage, setPerPage] = useState(5)

  const [pagination_current_page, setPagination_current_page] = useState(1)
  const [pagination_total_pages, setPagination_total_pages] = useState(1)

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [examtypes, setexamtypes] = useState([])
  // const [examName, setExamName] = useState('')
  const [exam_Types, setexam_Types] = useState([])
  const [type, setType] = useState('')
  const [feeType, setFeeType] = useState('')
  const [fee, setFee] = useState('')
  const [institute_id, setInstitute_id] = useState(' ')
  const [edited_Examtype, setEdited_Examtype] = useState(null)
  const [btnLoading, setBtnLoading] = useState(false)
  const [checkedRows, setCheckedRows] = useState([]); 
  const [selected_all, setSelected_all] = useState(false)
  const [noData, setNoData] = useState(false)
  const[institutes,setInstitutes]= useState([])
  const [allClassesChecked, setAllClassesChecked] = useState(false)

  const bearerToken = ApiToken()

// FETCH exam_types
    const fetchexamtypes = async () => {
      setLoading(true) // Set loading to true when fetching Examtypes
      setNoData(false)
      try {
        const response = await fetch(`${baseUrl_scl}/exam-types`,
         {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`
          },
          body:JSON.stringify({
            pageSize:perPage,
            filter_column:searchkey,
            filter:searchvalue
           
  
          })
        }
      )
      if (response.status === 401) {
        logout();
      }

        // if (!response.ok) {
        //   setLoading(false)
        //   throw new Error('Failed to fetch examtypes')
        // }

        const data = await response.json()
        // console.log(data)
        setexam_Types(data.exam_types.data); 
        setLoading(false) 
        // setNoData(true)
        setNoData(true);

       setPagination_total_pages(Math.ceil(data.exam_types.total/perPage))
       setPagination_current_page(data.exam_types.current_page)

      } catch (error) {
        console.error('Error fetching examtypes:', error)
        setLoading(false)
        toast.error('Failed to fetch examtypes')
      }
    }
    useEffect(() => {
    fetchexamtypes()
  }, [pagination_current_page,searchvalue,searchkey,perPage])

  const handleTypeChange = (event) => {
    const value = event.target.value.trim(); // Trim to remove extra whitespace
      setFeeType(value); // Accept any input (text, numbers, special characters, etc.)
  };
  
  // const handleFeeTypeChange = event => {
  //   setFeeType(event.target.value)
  // }
  const handleInchargeChange = event => {
      const value = event.target.value;
     setInstitute_id(value)
  }
  // const handlePageChange = (event, selectedPage) => {
  //   //alert(`Selected page: ${selectedPage}`);
  //   setPagination_current_page(selectedPage)
  // }

  // const handleSearchvalue = e => {
  //   // alert(e.target.value)
  //   setSearchvalue(e.target.value)
  //   setPagination_current_page(1)
  // }
  // const handleSearchkey = e => {
  //   // alert(e.target.value)
  //   setSearchkey(e.target.value)
  //   setPagination_current_page(1)
  // }
//   const handleSearchIconValue = () => {
//     setPagination_current_page(1);
//     fetchClasses();
//   }

  const handlePerPage = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
        setPerPage(5);
    } else {
        setPerPage(value);
    }
};

const handleCheckboxChange = (id) => {

  setCheckedRows(prevState =>
    prevState.includes(id) ? prevState.filter(rowId => rowId !== id) : [...prevState, id]
  );
};

 useEffect(()=>{
    const fetchInstitutes= async ()=>{
      const response= await fetch(`${baseUrl_scl}/institutes`,{
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`
        } 
      })
      if (response.status === 401) {
        logout();
      }

    
      if (!response.ok) {
        throw new Error('Failed to fetch institutes')
      }
    
      const data = await response.json()
      console.log(data,'data institutes')
      setInstitutes(data.institutes.data)
    
    }
    
    
    fetchInstitutes()
    
    },[])

useEffect(() => {
  handleCheckallbox()
}, [checkedRows]);

 const handleCheckallbox=()=>{
   if(exam_Types.length==checkedRows.length && checkedRows.length>0){
    setSelected_all(true)
   } else{
    setSelected_all(false)
   }
}

const handleBulkDelete = async () => {
  console.log('Deleted ids:', checkedRows);
  
  try {
    const result = await Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete selected exam types(s)?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete it',
      cancelButtonText: 'Cancel'
    })

    if (result.isConfirmed) {
      const response = await fetch(`${baseUrl_scl}/delete-exam-type`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          selected_Row_Ids: checkedRows
        })
      })

      if (!response.ok) {
        throw new Error('Failed to delete Exam type(s)')
      }

      // Remove the deleted permission from the local state
   
      setexamtypes(classes.filter(cl => ! checkedRows.includes(cl.id)));
      toast.success('exam types (s) deleted successfully')
      setCheckedRows([])
    }
  } catch (error) {
    console.error('Error:', error.message)
    toast.error('Failed to delete exam type(s)')
  }
  
  
  };

const handleCheckAll = e => {

  const isChecked = e.target.checked; // Determine if the checkbox is checked
  if (isChecked) {
    // If checked, select all class IDs
    const class_ids =  exam_Types.map(c => c.id);
    setCheckedRows(class_ids);
  } else {
    // If unchecked, clear all selections
    setCheckedRows([]);
  }
};

 

  const handleEdit = c => {
   // const editted_class = classes.find(cl => cl.id === classId)
    
    setEdited_Examtype(c)
    // setexamtypes(c.creator_user.name)
    setFeeType(c.type)
    // setFeeType(cl.fee_type)
    setInstitute_id(c.id)
    setOpen(true)
  }


  const handleSubmit = async () => {
   // console.log(data)
   // alert('ok')
  //  if(!examtypes){
  //   toast.error('Exam type is Required')
  //   return
  //  }
   if(!institute_id){
    toast.error('ID is Required')
    return
   }

  const data = {
    type:feeType,
  }
  if (institutes.length>1){
    data.institute_id=institute_id
  }
  //  if(!feeType){
  //   toast.error('Type is Required')
  //   return
  //  }
  

  //  if (institutes.length > 1 && institute_id=='0') {
  //   toast.error('Institute  is required.');
  //   return;
  // }

   setBtnLoading(true)

    try {
      let response
      if (edited_Examtype) {
    
        response = await fetch(`${baseUrl_scl}/update-exam-type/${edited_Examtype.id}`, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`
          },
          body: JSON.stringify(data)
        })
      } else {
        // If no Examtype is selected, it means we are adding
        response = await fetch(`${baseUrl_scl}/create-exam-type/`, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`
          },
          body: JSON.stringify(data)
        })
      }

      if (!response.ok) {
        setBtnLoading(false)
        throw new Error(edited_Examtype ? 'Failed to update Exam Type' : 'Failed to add Exam Type')
      }

    
      const responseData = await response.json()
      if (edited_Examtype) {
        // If editing, find the index of the edited permission and update it
        const updatedExamtypes = exam_Types.map(cl =>
          cl.id === edited_Examtype.id ? responseData.exam_type : cl
        )
        setexam_Types(updatedExamtypes)
      } else {
        console.log(responseData,'add')
        // If adding, add the new permission to the existing permissions
        setexam_Types([responseData.exam_type, ...exam_Types])
      }

      setBtnLoading(false)
      // Reset the form data
     
   
      handleClose()
      // Display toast message based on action
      toast.success(edited_Examtype ? 'ExamType updated successfully' : 'ExamType added successfully')
    } catch (error) {
      console.error('Error:', error.message)
      setLoading(false)
      toast.error(edited_Examtype ? 'Failed to update Exam Type' : 'Failed to add ExamType ')
    }
  }

  const handleDelete = async id => {
    try {
      const result = await Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete this?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      })

      if (result.isConfirmed) {
        const response = await fetch(`${baseUrl_scl}/delete-exam-type`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            selected_Row_Ids: [id]
          })
        })

        if (!response.ok) {
          throw new Error('Failed to delete Exam types')
        }

        // Remove the deleted permission from the local state
        setexam_Types( exam_Types.filter(cl => cl.id !== id))
        toast.success('Exam types deleted successfully')
        setCheckedRows(checkedRows.filter(r => r !== id))
      }
    } catch (error) {
      console.error('Error:', error.message)
      toast.error('Failed to delete Exam types')
    }
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setEdited_Examtype(null)
    setexamtypes('')
    // setType('')
    // setFeeType('Monthly')
    setFeeType('')
    setInstitute_id(' ')
    setOpen(false)
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckAllClasses = e => {
    const isChecked = e.target.checked

    setPerPage(isChecked ? 999999999 : 5)
    if (!isChecked) {
      setCheckedRows([])
    }
    setAllClassesChecked(isChecked)
  }

  return (
    <>
{   logedInUser && logedInUser.all_permissions.includes('View Classes') ?
<>

    <Grid container spacing={6}>
          <ToastContainer />
  
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ color: '#202020', mb: 4 }}>
          Exam Types
        </Typography>
        <Box
          className='searchFix'
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ textTransform: 'uppercase' }}>Search</Box>
            <Paper
              component=''
              sx={{
                p: '0 12px',
                display: 'flex',
                alignItems: 'center',
                maxWidth: 400,
                width: '100%',
                borderRadius: 4,
                boxShadow: 'none',
                border: `1px solid #A8B2B7`,
                background: 'transparent'
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={searchkey !== 'All' ? `Search by ${searchkey.charAt(0).toUpperCase() + searchkey.slice(1)}` : 'Search'}
                inputProps={{ 'aria-label': 'Search by Name' }}
                onKeyUp={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                   // handleSearchvalue()
                  }
                }}
                // onChange={handleSearchvalue}
              />
              <IconButton type='button' sx={{ p: '10px' }} aria-label='search'
              // onClick={handleSearchIconValue}
              >
                
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-search'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='#fbcd64'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
                  <path d='M21 21l-6 -6' />
                </svg>
              </IconButton>
            </Paper>
            {/* <CustomTextField select defaultValue={searchkey}
             label={false} id='sorting' className='childRoundedFull'
            //  onChange={handleSearchkey}
             >
              <MenuItem value='All'>All</MenuItem>
              <MenuItem value='name'>Name</MenuItem>
            
            </CustomTextField> */}
          </Box>

          <Box sx={{ textTransform: 'uppercase' }}>
          {logedInUser && logedInUser.all_permissions.includes('Add Class') &&
              <>
            <Button
              variant='contained'
              onClick={handleOpen}
              sx={{
                color: '#0C4660',
                '&:hover': { color: '#fff' },
                '&:hover img': { filter: 'brightness(20)' },
                textTransform: 'uppercase',
                fontSize: 12,
                fontWeight: 700
              }}
            >
              <img src='/images/add.svg' alt='none' />
              <Box sx={{ ml: 1 }}>ADD Exam Type</Box>
            </Button>
            </>
            }
          </Box>

        </Box>

         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 5 }}>
       
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{  mr: 2 }}>perPage</Box>
          <Paper
            sx={{
              p: '0 12px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: 400,
              width: '70px',
              borderRadius: 4,
              boxShadow: 'none',
              border: `1px solid #A8B2B7`,
              background: 'transparent',
              mr:4
            }}
          >
            <InputBase
              sx={{ textAlign:'center'}}
              placeholder={'5'}
              type='number'
              min='0'
              inputProps={{ style: { textAlign: 'center' } }}
              onKeyUp={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              onChange={handlePerPage}
            />
          </Paper>

          {logedInUser && logedInUser.all_permissions.includes('Delete Employee') &&
          <Box sx={{ display: 'flex', alignItems: 'left' }}>
        {checkedRows.length>0 &&    
         <IconButton
            type='button'
            sx={{ p: '6px',  ml:5 }}
            onClick={() => handleBulkDelete()}
            aria-label='delete'
          >
            <img src='/images/trash.svg' alt='Delete' />
            </IconButton>
            }
        </Box>
}

              <FormControlLabel
                      control={<Checkbox onChange={handleCheckAllClasses} checked={allClassesChecked} />}
                      label='All Types'
                      sx={{ mr: 2 }}
                    />

        </Box>
        {/* {pagination_total_pages > 0 && !isMobile &&
          <Pagination count={pagination_total_pages} color="primary" onChange={handlePageChange} />
        }       */}
        </Box> 
        

        <Card sx={{ mt: 5 }}>
          <CardContent sx={{ pr: 0 }}>
            <TableContainer component={Paper} className='tableTextDark'>
              <Table sx={{ minWidth: 650, color: 'red !important' }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}>
                      <Checkbox 
                      onChange={handleCheckAll} 
                    checked={selected_all}
                    /></TableCell>
                    <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}>ID</TableCell>
                    {/* <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}>Fee</TableCell> */}
                    <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}>Type</TableCell>
                    <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}>Created By</TableCell>
                    {/* <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}>Incharge</TableCell>  */}
                
                    <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }} align='left'>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
           
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} align='center'>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (

            
                  exam_Types.map((c)=>{
              return(
                <TableRow>
                  <TableCell sx={{ color: '#0C4660', textTransform: 'capitalize' }}> 
                  <Checkbox type="checkbox"
                            checked={checkedRows.includes(c.id)}
                            onChange={() => handleCheckboxChange(c.id)} /> 
                  </TableCell>
                <TableCell component='th'>{c.id}</TableCell>
                {/* <TableCell>
                  <div>{c.fee}</div>
                </TableCell> */}

                <TableCell>
                  <div>{c.type}</div>
                </TableCell>
                <TableCell>
                  <div>{c.creator_user.name}</div>
                </TableCell>
                {/* <TableCell>
                  <div>{c.incharge && c.incharge.name}</div>
                </TableCell> */}
              

                <TableCell align='left'>
                  <Box>
                    {logedInUser && logedInUser.all_permissions.includes('Update Class') &&
                      <IconButton type='button' sx={{ p: '6px' }} aria-label='search'
                          onClick={() => handleEdit(c)}
                      >
                        <img src='/images/edit.svg' alt='Edit' />

                      </IconButton>
                    }

                    {logedInUser && logedInUser.all_permissions.includes('Delete Class') &&
                    <IconButton type='button' sx={{ p: '6px' }} aria-label='search'
                    onClick={()=>handleDelete(c.id)}
                    >
                      <img src='/images/trash.svg' alt='User' />
                    </IconButton>
                    }

                  </Box>
                </TableCell>
              </TableRow>
              )
            })
          )
           }
                 
                 {/* {  classes.length==0 && noData &&  */}
                 
                 {/* <TableRow>
                   <TableCell colSpan={7} align="center">
                     <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column', gap:3}}>
                     <img src="/images/noData.svg" alt="No Data" width={68}/>
                     No data Available.
                     </Box>
                   </TableCell>
                 </TableRow> */}
          
              
             
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {pagination_total_pages> 0 && isMobile &&
          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Pagination count={pagination_total_pages} color="primary" onChange={handlePageChange} />
          </Box>
          } 
      
      </Grid>
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            return;
          }
          handleClose();
        }}        
        aria-labelledby='alert-RecentCompanies'
        aria-describedby='alert-RecentCompanies'
        fullWidth
        maxWidth='sm'
      >
                 <DialogTitle sx={{ fontSize: 28, fontWeight: 700, textAlign: 'center' }}>
            {edited_Examtype ? 'UPDATE ExamType' : 'ADD ExamType'}
        <CloseIcon
        onClick={handleClose}
    sx={{
      position: 'absolute',
      top: 3,
      right: 5,
      cursor: 'pointer',
      color: 'red', // Red color for the cross icon
      fontSize: '25px',
      zIndex: 10,
    }}
  />
        </DialogTitle>
        <DialogContent sx={{ padding: '40px !important' }}>
   
        
          <Grid container spacing={4}>
            {/* <Grid item xs={12} md={6}>
              <CustomTextField
                required
                id='Name'
                label='Class Name'
                className='childFull labelUp'
                value={className}
                SelectProps={{ MenuProps: { PaperProps: { style: { width: 'auto' } } } }}
                type='text'
                sx={{ width: '100%', marginBottom: 4, borderRadius: 10 }}
                onChange={handleNameChange}
                placeholder=''
              />
            </Grid> */}

            {/* <Grid item xs={12} md={12}>
              <CustomTextField
                required
                id='role'
                select
                label='Class Incharge'
                defaultValue={'Select Class Incharge'}
                className='childFull labelUp'
                SelectProps={{ MenuProps: { PaperProps: { style: { width: 'auto' } } } }}
                sx={{ width: '100%', marginBottom: 4 }}
              >
                <MenuItem value='Select Class Incharge'>Select Class Incharge</MenuItem>
                <MenuItem value='Teacher 1'>Teacher 1</MenuItem>
                <MenuItem value='Teacher 2'>Teacher 2</MenuItem>
                <MenuItem value='Teacher 3'>Teacher 3</MenuItem>
              </CustomTextField>
            </Grid> */}

            <Grid item xs={12} >
              <CustomTextField
                required
                id='TuitionFees'
                label='Type'
                placeholder='Enter Type'
                value={feeType}
                className='childFull labelUp'
                type='text'
                sx={{ width: '100%', marginBottom: 4 }}
                onChange={handleTypeChange}
              />
            </Grid>
        {institutes.length >1 &&
        <Grid item xs={12} >
        <CustomTextField
          required
          id='role'
          select
          label='Institutes'
          defaultValue={institute_id}
          className='childFull labelUp'
          SelectProps={{ MenuProps: { PaperProps: { style: { width: 'auto' } } } }}
          sx={{ width: '100%', marginBottom: 4 }}
          onChange={ handleInchargeChange}
        >
          <MenuItem value=' '>Select Institute</MenuItem>
          {institutes.map((i)=> {
          return(
            <MenuItem value={i.id} key={i.id}>{i.name}</MenuItem>
          )
        })}
          {/* <MenuItem value='Monthly'>1</MenuItem>
          <MenuItem value='Semester'> 2 (6 M)</MenuItem>
          <MenuItem value='Annual'>3</MenuItem> */}
        </CustomTextField>
      </Grid>
        
        }
            
            {/* <Grid item xs={12} md={12}>
              <CustomTextField
                id='role'
                select
                label='Created By'
                defaultValue={feeType}
                className='childFull labelUp'
                SelectProps={{ MenuProps: { PaperProps: { style: { width: 'auto' } } } }}
                sx={{ width: '100%', marginBottom: 4 }}
                onChange={handleFeeTypeChange}
              >
               <MenuItem value=' '>Select Creator</MenuItem>
                 <MenuItem value='Monthly'>Monthly</MenuItem>
                <MenuItem value='Semester'> Semester (6 M)</MenuItem>
                <MenuItem value='Annual'>Annual</MenuItem> */}
              {/* {employees.map((em)=> {
                return(
                  <MenuItem value={em.id} key={em.id}>{em.name}</MenuItem>
                )
              })} */}
              
              {/* </CustomTextField>
            </Grid> */}

            {/* {institutes.length > 1 && (
            <Grid item xs={12} md={12}>
              <CustomTextField
                required
                id='role'
                select
                label='Institute'
                defaultValue={institute_id}
                className='childFull labelUp'
                SelectProps={{ MenuProps: { PaperProps: { style: { width: 'auto' } } } }}
                sx={{ width: '100%', marginBottom: 4 }}
                // onChange={handleInstituteChange}
              >
                <MenuItem value='0'>Select Institute</MenuItem>
                {institutes.map((i)=> {
                return(
                  <MenuItem value={i.id} key={i.id}>{i.name}</MenuItem>
                )
              })}
              
              </CustomTextField>
            </Grid>
            )}
   */}
          </Grid>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 5 }}>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              disabled={btnLoading}
              sx={{ textTransform: 'uppercase', mt: 4, width: '100%', paddingTop: 4, paddingBottom: 4 }}
           
           >
              {btnLoading ? (
                    <>
                      <span style={{ marginLeft: '8px' }}>Loading...</span>
                      <CircularProgress size={20} style={{ marginLeft: '8px' }} />
                    </>
                  ) : edited_Examtype ? (
                    'UPDATE' // Change button text to 'UPDATE' when editing a permission
                  ) : (
                    'ADD'
                  )}
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleClose}
              sx={{
                textTransform: 'uppercase',
                mt: 4,
                width: '100%',
                paddingTop: 4,
                paddingBottom: 4
              }}
            >
              Cancel
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Grid>

    </> 
    : 
    <>
<Box
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '81vh', 
  fontSize: '1.5rem', textAlign: 'center', flexDirection:'row'}}
>  
          <Tooltip title="Go Back" placement="top-start">
            <Button
              variant='outlines'
              color='error'
              sx={{
                textTransform: 'uppercase',
                fontWeight: 700,
                mb: 1,
                width: 50,
                height: 50,
                borderRadius: 10,
                px: 1,
                py: 5
              }}
              onClick={() => router.back()}
            >
              <img src='/images/arrow-left.svg' alt='left' width={25} />
            </Button>
          </Tooltip>
  You have not permissions to View Classes
</Box>

</>
    }
</>

  )
}

export default ExamTypes
