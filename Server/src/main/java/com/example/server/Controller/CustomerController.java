package com.example.server.Controller;

import com.example.server.Entity.Cart;
import com.example.server.Entity.Customer;
import com.example.server.Entity.Product;
import com.example.server.Model.PurchaseRequest;
import com.example.server.Repository.ProductRepo;
import com.example.server.Services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CustomerController {
    @Autowired
    private CustomerServices customerServices;
    @Autowired
    private ProductRepo productRepo;

    @PostMapping("/registration")
    public Customer userRegistration(@RequestBody Customer custData){
        return customerServices.userRegistration(custData);
    }

    //login
    @PostMapping("/login")
    public ResponseEntity<String> Login(@RequestBody Customer loginRequest) {
        String response = customerServices.Login(loginRequest.getEmail(), loginRequest.getPwd());

        if ("success".equals(response)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login data");
        }
    }

    @GetMapping("/getUsers")
    public List<Customer> getUsers(){
        return customerServices.getUsers();
    }

    @GetMapping("/getuser/{email}")
    public Customer getUserByEmail(@PathVariable String email){
        System.out.println(email);
        return customerServices.getUserByEmail(email);
    }
    //addToCart
    @PostMapping("/purchase")
    public String purchase(@RequestBody PurchaseRequest purchaseRequest){
        System.out.println(purchaseRequest.getCustomer_mail());
        System.out.println(purchaseRequest.getTotal_amount());
        customerServices.purchase(purchaseRequest);

        return ("Purchased");
    }


    @PostMapping("/addtocart")
    public Integer addToCart(@RequestBody Cart cart){
        customerServices.addToCart(cart);
        Product product=productRepo.findById(cart.getProductId()).get();
        Integer availability=product.getQuantity();
        return availability;

    }
    @PostMapping("/removefromcart")
    public String removeFromCart(@RequestBody Cart cart){
        customerServices.removeFromCart(cart);
        return("Removed product from Cart");
    }
    @GetMapping("/search/{keyword}")
    public List<Product> searchProduct(@PathVariable String keyword){
        System.out.println(keyword);
        return customerServices.searchProduct(keyword);
    }


}
