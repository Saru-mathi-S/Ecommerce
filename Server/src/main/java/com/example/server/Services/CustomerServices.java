package com.example.server.Services;

import com.example.server.Entity.Cart;
import com.example.server.Entity.Customer;
import com.example.server.Entity.Product;
import com.example.server.Model.PurchaseRequest;

import java.util.List;

public interface CustomerServices {
    public Customer userRegistration(Customer custData);

    public List<Customer> getUsers();



    public String purchase(PurchaseRequest purchaseRequest);

   public  String Login(String userName, String pwd);

    public List<Product> searchProduct(String keyword);

    public Integer addToCart(Cart cart);

    public String removeFromCart(Cart cart);

    public Customer getUserByEmail(String email);
}
