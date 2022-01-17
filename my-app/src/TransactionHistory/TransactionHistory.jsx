import PropTypes from "prop-types";
import {
    History,
  Thead,
  Head,
  TBody,
  TD,
    TR
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
    return (
        <History>
  <Thead >
    <tr>
      <Head>Type</Head>
      <Head>Amount</Head>
      <Head>Currency</Head>
    </tr>
  </Thead >

        <TBody>
          {items.map(({ id, type, amount, currency }) => (
             <TR key={id}>
               <TD>{type}</TD>
      <TD>{amount}</TD>
      <TD>{currency}</TD>
    </TR>
          ))}
  </TBody>
</History>)
}

TransactionHistory.propTypes = {
 items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}