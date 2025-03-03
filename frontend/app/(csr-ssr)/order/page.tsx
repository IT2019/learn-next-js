'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { addItem, removeItem, CartItem } from '../../../redux/cart/cartSlice';

const OrderPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddItem = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    // Logic thanh toán
    alert('Thanh toán thành công!');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Quản lý đơn hàng</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-medium">Danh sách sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Danh sách sản phẩm */}
          {[
            { id: '1', name: 'Sản phẩm A', price: 100 },
            { id: '2', name: 'Sản phẩm B', price: 150 },
            { id: '3', name: 'Sản phẩm C', price: 200 },
          ].map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">Giá: {item.price} VND</p>
              <button
                onClick={() => handleAddItem(item)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-medium">Giỏ hàng</h2>
        <div className="mt-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Giỏ hàng trống.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Giá: {item.price} VND</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <h2 className="text-xl font-semibold">Tổng giá trị:</h2>
        <p className="text-xl">{totalPrice} VND</p>
      </div>

      <div className="mt-8">
        <button
          onClick={handleCheckout}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
