import styled from 'styled-components';
import { Cart } from '../../types';
import Table from './Table';
import ShippingForm from './shippingForm';
import PaymentButton from './PaymentButton';

type OrderFormProps = {
  cart : Cart
}

const Container = styled.div``;

export default function OrderForm({ cart }:OrderFormProps) {
  return (
    <Container>
      <h2>주문</h2>
      <Table
        lineItems={cart.lineItems}
        totalPrice={cart.totalPrice}
      />
      <ShippingForm />
      <PaymentButton cart={cart} />
    </Container>
  );
}
