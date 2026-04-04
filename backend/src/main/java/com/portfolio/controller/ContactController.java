package com.portfolio.controller;

import com.portfolio.dto.ContactRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3008", "http://localhost:5173"})
public class ContactController {

    @PostMapping
    public ResponseEntity<String> submitContact(@RequestBody ContactRequest contactRequest) {
        try {
            // Log the contact request
            System.out.println("Contact Request Received:");
            System.out.println("Name: " + contactRequest.getName());
            System.out.println("Email: " + contactRequest.getEmail());
            System.out.println("Message: " + contactRequest.getMessage());
            
            // In a production environment, you would:
            // 1. Save to database
            // 2. Send email notification
            // 3. Validate email format
            
            return ResponseEntity.ok("Message received successfully");
        } catch (Exception e) {
            System.err.println("Error processing contact request: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to process your message");
        }
    }

}
