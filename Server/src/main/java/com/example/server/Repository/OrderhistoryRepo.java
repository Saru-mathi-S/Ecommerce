package com.example.server.Repository;

import com.example.server.Entity.Orderhistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface OrderhistoryRepo extends JpaRepository<Orderhistory,Long> {
}
