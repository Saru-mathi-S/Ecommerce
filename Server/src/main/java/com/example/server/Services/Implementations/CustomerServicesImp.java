package com.example.server.Services.Implementations;

import com.example.server.Entity.*;
import com.example.server.Model.PurchaseRequest;
import com.example.server.Repository.*;
import com.example.server.Services.CustomerServices;
import com.example.server.Services.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class CustomerServicesImp implements CustomerServices {
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private OrderhistoryRepo orderhistoryRepo;

    @Autowired
    private CartRepo cartRepo;
    @Autowired
    private EmailSender emailSender;
    @Override
    public Customer userRegistration(Customer custData) {
        String email=custData.getEmail();
        Customer obj=customerRepo.findByEmail(email);
        if(obj!=null){
            System.out.println("Email already exist");
            return obj;
        }
        System.out.println("Registtration Successful");
        return customerRepo.save(custData);
    }

    @Override
    public List<Customer> getUsers() {
        return customerRepo.findAll();
    }

    public void sendMail(String email,String subject,String body){
        emailSender.sendEmail(email,subject,body);
        System.out.println("New email sent successfully!");
    }

    @Override
    public String purchase(PurchaseRequest purchaseRequest) {
        Orderhistory newOrders =new Orderhistory();
        String  custmail=purchaseRequest.getCustomer_mail();

        //LocalDateTime purchaseDate=purchaseRequest.getCreatedAt();
        Integer price=purchaseRequest.getTotal_amount();

        Customer customer=customerRepo.findByEmail(custmail);
        System.out.println(customer);
        newOrders.setCustomer_id(customer.getCustId());
        newOrders.setTotal_amount(price);
        newOrders.setPurchased_date(LocalDateTime.now());
        System.out.println(LocalDateTime.now());
        Orderhistory orders =orderhistoryRepo.save(newOrders);
        String subject="Order Confirmation";
        String body="Thank You for Purchasing";
        sendMail(custmail,subject,body);


//        Long orderId= orders.getOrderId();
//        for(ProductDetail item:products){
//            Product product=productRepo.findById(item.prodId).get();
//
//            OrderItem newOrderItem=new OrderItem();
//            newOrderItem.setOrders(orders);
//            newOrderItem.setProduct(product);
//
//            Integer quantity= item.quantity;
//            newOrderItem.setQuantity(quantity);
//            Integer available=product.getQuantity();
//            available=available-quantity;
//            if(available<0){
//                return "Not available";
//            }else if(available>=0){
//                product.setQuantity(quantity);
//            }
//        }
        return("Purchased");
    }

//    @Override
//    public Customer Login(String email, String pwd) {
//        Customer obj=customerRepo.findByEmail(email);
//        if(obj!=null){
//            String emailId=obj.getEmail();
//            String password=obj.getPwd();
//            if(Objects.equals(pwd,password)){
//                System.out.println("Authenticated");
//            }
//            else{
//                System.out.println("Not valid");
//            }
//        }else{
//            System.out.println("No user found");
//        }
//
//        return obj;
//    }

    @Override
    public List<Product> searchProduct(String keyword) {
        return productRepo.findByProductNameContainingIgnoreCase(keyword);
    }

    @Override
    public Integer addToCart(Cart cart) {

        Product product=productRepo.findById(cart.getProductId()).get();
        Integer productAvailability=product.getQuantity();
        Integer quantityPurchased=cart.getQuantity();
        productAvailability=productAvailability-quantityPurchased;
        if (productAvailability >= 0) {
            product.setQuantity(productAvailability);
        }else{
            System.out.println("Not Available");
        }
        cartRepo.save(cart);
        return product.getQuantity();

    }

    @Override
    public String removeFromCart(Cart cart) {
//        cartRepo.deleteById(cartId);
        Long prodId=cart.getProductId();
        Product product=productRepo.findById(prodId).get();
        Integer quantity=product.getQuantity();

        product.setQuantity(quantity+1);
        productRepo.save(product);
        return("Removed from Cart");
    }

    @Override
    public Customer getUserByEmail(String email) {
        Customer customer=customerRepo.findByEmail(email);
        return customer;
    }

    @Override
    public String Login(String email, String password) {
        Customer userLogIn = customerRepo.findByEmail(email);
        if (userLogIn != null && userLogIn.getPwd().equals(password)) {
            System.out.println("Login success");
            return "success";
        } else {
            return "failure";
        }
    }

}
