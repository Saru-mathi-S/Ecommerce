package com.example.server.Model;

import com.example.server.Entity.Product;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseRequest {

    public String  customer_mail;
    public Integer total_amount;

}
