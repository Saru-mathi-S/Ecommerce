package com.example.server;

import com.example.server.Services.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@SpringBootApplication
@RestController
public class ServerApplication {

    @Autowired
    private EmailSender emailSender;
    @GetMapping("/")
    public String testFunction(){
        return ("Works Fine");
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void sendMail(){
//        emailSender.sendEmail("sarumathis@student.tce.edu","Test mail","Happy Purchasing!!!");
//    }
}
