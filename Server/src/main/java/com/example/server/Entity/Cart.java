package com.example.server.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cartId;
    private Long productId;
    private Long custId;
    private Integer quantity;

//    @ManyToOne
//    private Orders storeCart;
}
