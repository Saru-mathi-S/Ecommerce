package com.example.server.Controller;

import com.example.server.Entity.Product;
import com.example.server.Entity.Cart;
import com.example.server.Services.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RestController
public class AdminController {
    @Autowired
    private AdminServices adminServices;

    @PostMapping("/addnewproduct")
    public Product addNewProduct(@RequestBody Product product){
//        System.out.println(product.getFilepath());
        return adminServices.addNewProduct(product);
    }

    @GetMapping("/getProducts/{category}")
    public List<Product> getProductByCategory(@PathVariable String category){
        return adminServices.getProductByCategory(category);
    }

    @DeleteMapping("/deleteProduct/{productId}")
    public String deleteProductById(@PathVariable Long productId){
        adminServices.deleteProductById(productId);
        return("Product Deleted");
    }
    @GetMapping("/vieworders")
    public List<Cart> viewOrders(){

        return adminServices.viewOrders();
    }

    @GetMapping("/allproducts")
    public List<Product> getAllProducts(){
        System.out.println("getall");
        return adminServices.getAllProducts();

    }

}
