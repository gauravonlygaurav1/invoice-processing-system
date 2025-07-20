
import {Table, TableBody, TableCell, TableHead, TableRow, Button, styled,Typography} from '@mui/material';

const StyledTable = styled(Table)({
    width: "80%",
    margin: 20,
    marginTop: 40,
    '& > thead > tr > th ': {
        background: '#9c2f9cff',
        color: '#f2ededff',
        fontSize : 17,
        padding: 11,
        
    },
    '& > tbody > tr > td':{
        fontSize: 15,
    },
    '& > tbody > p':{
        fontSize:18,
        marginTop: 15,
    }
})

const Invoices = ({ invoices, removeInvoice }) => {


    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    invoices && Array.isArray(invoices) && invoices.length > 0 ?
                    invoices.map(invoice => (
                        <TableRow>
                            <TableCell>{invoice.vendor}</TableCell>
                            <TableCell>{invoice.product}</TableCell>
                            <TableCell>{invoice.amount}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.action}</TableCell>
                            <TableCell>
                                <Button 
                                variant='contained'
                                color='success'
                                onClick = { () => removeInvoice(invoice.id)}
                                >Invoice Done</Button>
                            </TableCell>
                        </TableRow>
                    ))  
                     :
                    <Typography> No Pending Invoices </Typography>
                }
            </TableBody>
        </StyledTable>
    )
}

export default Invoices;