import { useAppSelector } from '@/hooks/hooks'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

const CartTable = () => {
  const { cart } = useAppSelector((state) => state.cart)

  return (
    <TableContainer className="bg-light border-none">
      <Table className="bg-light border-t shadow-transparent text-md font-roboto font-medium">
        <TableHead className="py-3">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Sum</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <img src={`/images/flowers/${row.}`}/>
                <div>{row.name}</div>
              </TableCell>
              <TableCell>{row.price} $</TableCell>
              {/* <TableCell>{row.qty}</TableCell> */}
              {/* <TableCell>{row.totalPrice}</TableCell> */}
              <TableCell>
                <button>
                  <img src="/images/icons/basket.svg" alt="basket.svg" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartTable
