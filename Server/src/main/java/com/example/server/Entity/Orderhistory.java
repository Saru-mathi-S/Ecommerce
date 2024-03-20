package com.example.server.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Orderhistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long order_id;
    private long customer_id;
    private long total_amount;
    private LocalDateTime purchased_date;
}
