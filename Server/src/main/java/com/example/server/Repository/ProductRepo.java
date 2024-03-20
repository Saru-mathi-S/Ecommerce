package com.example.server.Repository;

import com.example.server.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product,Long> {

    public List<Product> findByCategory(String category);

    public List<Product> findByproductName(String keyword);
    public List<Product> findByProductNameContainingIgnoreCase(String keyword);
}
