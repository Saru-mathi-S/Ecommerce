package com.example.server.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long custId;

    private String pwd;
    @Column(unique = true)
    private String email;
    private String fname;
    private String addr;
    private long mobile;

//    @OneToMany(mappedBy ="customer" ,cascade = CascadeType.ALL)
//    private List<Orders> purchaseList;


}
