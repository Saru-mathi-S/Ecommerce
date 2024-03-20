package com.example.server.Services.Implementations;

import com.example.server.Entity.Cart;
import com.example.server.Entity.Product;
import com.example.server.Repository.CartRepo;
import com.example.server.Repository.ProductRepo;
import com.example.server.Services.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class AdminServicesImp implements AdminServices {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private CartRepo cartRepo;
    @Override
    public Product addNewProduct(Product product) {
        System.out.println(product);
        return productRepo.save(product);
    }

    @Override
    public List<Product> getProductByCategory(String category) {
        System.out.println(category);
        return productRepo.findByCategory(category);
    }

    @Override
    public String deleteProductById(Long productId) {
        productRepo.deleteById(productId);
        return ("Product deleted successfully");
    }

    @Override
    public List<Cart> viewOrders() {
        List<Cart> sample=cartRepo.findAll();
        for(Cart item:sample){
            System.out.println("sample"+item.getCustId());
        }
        return cartRepo.findAll();
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

//    @Override
//    public String addProductImage(MultipartFile file) {
//        String Folder_Path="C:\\Users\\ss150\\Desktop\\ImageFolder";
//        String file_path=Folder_Path+file.getOriginalFilename();
//        Product product=productRepo.save(Product.builder()
//                        .productId(1)
//                        .productName("laptop")
//                        .price(100.5)
//                        .description("this is a laptop from dell brand")
//                        .filepath(file_path)
//                .build());
//        if(product!=null){
//            return "file uploaded: "+file.getOriginalFilename();
//        }
//        return "error";
//    }
}
